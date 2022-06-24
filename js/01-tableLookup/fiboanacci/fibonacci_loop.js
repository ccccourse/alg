function fibonacci (n) {
  if (n===0) return 0
  if (n===1) return 1
  var fi2 = 0, fi1 = 1 // f(0)=0, f(1)=1
  for (var i=2; i<=n; i++) {
    var fi = fi1+fi2
    fi2 = fi1
    fi1 = fi
  }
  return fi
}

var startTime = Date.now()
const n = 100
console.log(`fibonacci(${n})=${fibonacci(n)}`)
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log(`time:${milliSeconds}ms`)