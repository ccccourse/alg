function factorial(n) {
  var p = 1n
  for (let i=1n; i<=n; i++) {
    p = p * i;
  }
  return p
}

function c(n, k) {
  return factorial(n) / (factorial(k)*factorial(n-k))
}

console.log("c(5,2)=", c(5,2))
console.log("c(7,3)=", c(7,3))
console.log("c(12,5)=", c(12,5))
console.log("c(60,30)=", c(60,30))
console.log("c(600,300)=", c(600,300))