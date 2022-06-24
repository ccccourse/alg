import * as Z from "https://deno.land/x/zip/mod.ts"

console.log(await Z.compress("./test", "./test.zip"))
console.log(await Z.decompress("./test.zip", "./test2"))
