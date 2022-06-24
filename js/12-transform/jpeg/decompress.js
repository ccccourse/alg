import JPEG from "https://deno.land/x/jpeg/mod.ts";

const img = await Deno.readFile("./deno.jpg")
const raw = JPEG.decode(img)

console.log(raw)
