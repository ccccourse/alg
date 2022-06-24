// Download a file from the web, and stream it into a file on disk.
const file = await Deno.create("./example.html");
const resp = await fetch("https://example.com");
await resp.body.pipeTo(file.writable);
