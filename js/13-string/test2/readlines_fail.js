import { readLines } from "https://deno.land/std/io/bufio.ts";

async function main() {
   for await (const line of readLines(Deno.stdin)) {
      console.log("read line", line);
  }
}

console.log("reading lines from stdin");
main();