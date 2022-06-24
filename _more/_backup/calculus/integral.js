# 積分 integral calculus
var integral = def (f, a, b, dx = 0.01) :
  var area = 0.0
  for (var x = a  x < b  x = x + dx) :
    area = area + f(x) * dx
  
  return area


print('integral(sin, 0, pi) =', integral(Math.sin, 0, Math.PI))
