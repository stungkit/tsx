"use strict";var c=require("repl"),n=require("@esbuild-kit/core-utils"),i=require("./package-eab616d0.cjs");function u(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var f=u(c);console.log(`Welcome to tsx v${i.version} (Node.js ${process.version}).
Type ".help" for more information.`);const r=f.default.start(),{eval:d}=r,p=async function(e,t,o,a){const s=await n.transform(e,".ts").catch(l=>(console.log(l.message),{code:`
`}));return d.call(this,s.code,t,o,a)};r.eval=p;
