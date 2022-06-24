import { printf } from "https://deno.land/std/fmt/printf.ts";

function distance(p1, p2) {
  let dx = p1.x - p2.x
  let dy = p1.y - p2.y
  return dx*dx+dy*dy
}

let p1 = {x:3, y:4}, p2 = {x: 0, y:0}

printf('distance(%j,%j)=%d\n', p1, p2, distance(p1,p2))
