"use strict";(self.webpackChunk_lage_docs=self.webpackChunk_lage_docs||[]).push([[118],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8036:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),i=["components"],l={},c=void 0,p={unversionedId:"Introducing Lage/Overview",id:"Introducing Lage/Overview",title:"Overview",description:"Overview",source:"@site/docs/Introducing Lage/Overview.md",sourceDirName:"Introducing Lage",slug:"/Introducing Lage/Overview",permalink:"/lage/docs/Introducing Lage/Overview",editUrl:"https://github.com/microsoft/lage/docs/Introducing Lage/Overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Introducing Lage",permalink:"/lage/docs/Guide/"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Quick Start",id:"quick-start",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Your JS repo has gotten large enough that you have turned to using a tool to help you manage multiple packages inside a repository. That's great! However, you realized quickly that the tasks defined inside the workspace have to be run in package dependency order."),(0,a.kt)("p",null,"Lerna, Rush, wsrun and even pnpm will provide a simple way for you to run npm scripts in a topological order. However, these tools will force you to run your tasks by script name one at a time. For example, all the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," scripts will have to run first. Then all the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," scripts run in the topological order."),(0,a.kt)("p",null,"This usually means that there are wasted CPU cycles in between ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),". We can achieve better pipelining the npm scripts if we had a way to say that ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," can run as soon as ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," are done for the package."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lage"),' (Norwegian for "make", pronounced law-geh) solves this by providing a terse pipelining syntax. It has many features geared towards speeding up the task runner that we\'ll explore later.'),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lage")," gives you this capability with very little configuration. First, let's install the ",(0,a.kt)("inlineCode",{parentName:"p"},"lage")," utility. You can place this in your workspace's root ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add -D lage\n")),(0,a.kt)("p",null,"Confirm with ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," that you are sure to add a package at the root level, you then place a root level script inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to run ",(0,a.kt)("inlineCode",{parentName:"p"},"lage"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "scripts": {\n    "build": "lage build",\n    "test": "lage test"\n  }\n}\n')),(0,a.kt)("p",null,"Add a configuration file in the root to get started. Create this file at the root ",(0,a.kt)("inlineCode",{parentName:"p"},"lage.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  pipeline: {\n    build: ["^build"],\n    test: ["build"],\n  },\n};\n')),(0,a.kt)("p",null,"Do not worry about the syntax for now. We will go over the configuration file in a coming section. You can now run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ lage test\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lage")," will detect that you need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," steps before ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),"s are run."),(0,a.kt)("h1",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"This project welcomes contributions and suggestions.  Most contributions require you to agree to a\nContributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us\nthe rights to use your contribution. For details, visit ",(0,a.kt)("a",{parentName:"p",href:"https://cla.opensource.microsoft.com"},"https://cla.opensource.microsoft.com"),"."),(0,a.kt)("p",null,"When you submit a pull request, a CLA bot will automatically determine whether you need to provide\na CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions\nprovided by the bot. You will only need to do this once across all repos using our CLA."),(0,a.kt)("p",null,"This project has adopted the ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.microsoft.com/codeofconduct/"},"Microsoft Open Source Code of Conduct"),".\nFor more information see the ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.microsoft.com/codeofconduct/faq/"},"Code of Conduct FAQ")," or\ncontact ",(0,a.kt)("a",{parentName:"p",href:"mailto:opencode@microsoft.com"},"opencode@microsoft.com")," with any additional questions or comments."))}d.isMDXComponent=!0}}]);