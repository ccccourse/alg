# Euclid's Algorithm 
# https://stackoverflow.com/questions/32042240/euclids-algorithm-javascript

var gcd = def(a, b) :  
  if (!b) return a
  return gcd(b, a % b)


print(gcd(462, 910))