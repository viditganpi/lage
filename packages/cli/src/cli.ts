import { Command } from "commander";

import { runCommand } from "./commands/run/index.js";
import { cacheCommand } from "./commands/cache/index.js";
import { NoTargetFoundError } from "./types/errors.js";

async function main() {
  const program = new Command();
  program.addCommand(runCommand, { isDefault: true });
  program.addCommand(cacheCommand);

  await program.parseAsync(process.argv);
}

main().catch((err) => {
  /* eslint-disable no-console */
  switch (err) {
    case NoTargetFoundError:
      console.log("lage: no targets found that matches the given scope.");
      break;
    default:
      console.error(err);
      break;
  }
  /* eslint-enable no-console */

  process.exitCode = 1;
});
