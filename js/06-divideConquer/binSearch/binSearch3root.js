function f(x) {
  // return x*x-4*x+1;
  return x*x-3;
}

function bsolve(f,a,b) {
  var c = (a+b)/2;
  if (Math.abs(a-b) < 0.00001)
    return c;
  if (f(c)*f(a)>=0)
    return bsolve(f, c, b);
  else
    return bsolve(f, a, c);
}

// var x=bsolve(f, 0, 1);
var x=bsolve(f, 0, 3);
console.log("x=", x, " f(x)=", f(x));
