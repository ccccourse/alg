console.time("foo");
await new Promise((resolve) => setTimeout(resolve, 1000));
console.timeEnd("foo");