function f(x) {
  return x*x-4*x+1;
}

function bsolve(f,a,b) {
  var c = (a+b)/2;
  if (Math.abs(a-b) < 0.00001)
    return c;
  if (f(c)*f(a)>=0) // f(a), f(c) 同號，代表 f(c) 和 f(b) 異號
    return bsolve(f, c, b);
  else
    return bsolve(f, a, c);
}

var x=bsolve(f, 0, 1);
console.log("x=", x, " f(x)=", f(x));
