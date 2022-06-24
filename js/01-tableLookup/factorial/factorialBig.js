function factorial(n) {
  var p = 1n
  for (let i=1n; i<=n; i++) {
    p = p * i;
  }
  return p
}

console.log('factorial(60)=', factorial(60n))
