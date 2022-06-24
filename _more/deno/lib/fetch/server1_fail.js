import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  if (req.method === "POST") {
    // Save the incoming request body to a file on disk
    const path = await Deno.makeTempFile();
    const file = await Deno.create(path);
    await req.body.pipeTo(file.writable);
    return new Response(`Saved file to ${path}`);
  } else {
    // Serve a file from disk
    const path = "./example.html";
    const file = await Deno.open(path);
    return new Response(file.readable, {
      headers: { "content-type": "text/html" },
    });
  }
});