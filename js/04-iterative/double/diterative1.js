/* x^2 - 2x + 1 = 0 改寫

y = x^2                         y = f(x) = x^2
2x-1 = y    => x=(y+1)/2        x = g(y) = (y+1)/2
*/

function f(x) {
  return x*x
}

function g(y) {
  return (y+1)/2
}

function iterate(g, x) {
  console.log("x=", x);
  while (true) { // for (var i=0; i<100000; i++) {
    if (Math.abs(x-g(x)) < 0.001)
      return x
    x = g(f(x))
    console.log("x=", x);
  }
  return x
}

// var x = iterate(g, 10) // 會發散
var x = iterate(g, 0.5) // 會收斂
console.log("x=", x, "g(f(x))=", g(f(x)))

/* 永遠收斂的案例
x = 0.8*sqrt(x^2) = 0.8x .....

function f(x) {
  return x*x
}

function g(y) {
  return 0.8*Math.sqrt(y)
}
*/
