const response = await fetch("https://example.com");
const body = response.body.pipeThrough(new CompressionStream("gzip"));
const file = await Deno.create("./file.gz");
for await (const chunk of body) {
  await file.write(chunk);
}