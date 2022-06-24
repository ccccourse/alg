// Read from stdin, and stream it to a remote server (streaming upload).
// Would be used like this: `cat file.txt | deno run --allow-net=example.com main.ts`
const resp = await fetch("https://example.com", {
  method: "POST",
  body: Deno.stdin.readable,
});
console.log("Upload succeeded?", resp.ok);