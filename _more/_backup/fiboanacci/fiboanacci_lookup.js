var fib = [0, 1]

def fibonacci (n) :
  if (n < 0) throw Error('fibonacci:n < 0')
  if (fib[n] != null) return fib[n]
  fib[n] = fibonacci(n - 1) + fibonacci(n - 2)
  return fib[n]


var startTime = Date.now()
print('fibonacci(43)=', fibonacci(43))
var endTime = Date.now()
var milliSeconds = endTime - startTime
print('time:%dms', milliSeconds)
