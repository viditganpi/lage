import type { TargetRunner, TargetRunnerOptions } from "@lage-run/scheduler-types";
import { pathToFileURL } from "url";

export interface WorkerRunnerOptions {
  taskArgs: string[];
}

/**
 * Creates a workerpool per target task definition of "type: worker"
 *
 * Target options are fed into `workerpool`, so target can customize the pool:
 *
 * https://www.npmjs.com/package/workerpool
 *
 * Example:
 *
 * ```ts
 * // lage.config.js
 * {
 *   pipeline: {
 *     "lint": {
 *       type: "worker",
 *       options: {
 *         worker: "workers/lint.js",
 *         maxWorkers: 15
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * ```js
 * // worker.js
 * module.exports = async function lint({ target, abortSignal }) {
 *  if (abortSignal.aborted) {
 *    return;
 *  }
 *
 *  // Do work here - but be sure to have a way to abort via the `abortSignal`
 * }
 * ```
 */
export class WorkerRunner implements TargetRunner {
  static gracefulKillTimeout = 2500;

  constructor(private options: WorkerRunnerOptions) {}

  async run(runOptions: TargetRunnerOptions) {
    const { target, weight, abortSignal } = runOptions;
    const { taskArgs } = this.options;
    const scriptFile = target.options?.worker ?? target.options?.script;

    if (!scriptFile) {
      throw new Error('WorkerRunner: "script" configuration is required - e.g. { type: "worker", script: "./worker.js" }');
    }

    let importScript = scriptFile;

    if (!importScript.startsWith("file://")) {
      importScript = pathToFileURL(importScript).toString();
    }

    const scriptModule = await import(importScript);
    const runFn = typeof scriptModule.default === "function" ? scriptModule.default : scriptModule;

    if (typeof runFn !== "function") {
      throw new Error("WorkerRunner: worker script must export a function; you likely need to use `module.exports = function() {...}`");
    }

    await runFn({ target, weight, taskArgs, abortSignal });
  }
}
