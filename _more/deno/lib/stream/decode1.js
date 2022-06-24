const response = await fetch("https://example.com");
const body = response.body.pipeThrough(new TextDecoderStream());
for await (const chunk of body) {
  console.log(chunk);
}