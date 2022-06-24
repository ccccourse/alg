const start = performance.now();
await fetch("https://httpbin.org/delay/1");
const end = performance.now();
console.log("Took", end - start, "milliseconds");