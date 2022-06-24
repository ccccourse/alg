const input = await Deno.open("./file.gz");
const output = await Deno.create("./file2.txt");
await input.readable
  .pipeThrough(new DecompressionStream("gzip"))
  .pipeTo(output.writable);