function factorial(n) {
  var p = 1
  for (let i=1; i<=n; i++) {
    p = p * i;
  }
  return p
}

console.log('factorial(60)=', factorial(60))
