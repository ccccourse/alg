function c(n, k) {
  if (k==0 || k==n) return 1
  return c(n-1, k) + c(n-1, k-1)
}

console.log("c(5,2)=", c(5,2))
console.log("c(7,3)=", c(7,3))
console.log("c(12,5)=", c(12,5))
console.log("c(60,30)=", c(60,30))
