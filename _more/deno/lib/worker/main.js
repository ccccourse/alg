import * as Comlink from "https://cdn.skypack.dev/comlink@4.3.1?dts";

const url = new URL("./worker.js", import.meta.url);
const worker = new Worker(url, { type: "module" });

const obj = Comlink.wrap(worker);

console.log(`Counter: ${await obj.counter}`);
await obj.inc();
console.log(`Counter: ${await obj.counter}`);

worker.terminate();