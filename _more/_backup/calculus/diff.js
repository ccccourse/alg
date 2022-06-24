var diff = def (f, x, dx = 0.000000001) :
  var dy = f(x + dx) - f(x - dx)
  return dy / (dx + dx)


print('diff(sin(x), pi/3) = ', diff(Math.sin, Math.PI / 3))
print('cos(pi/3) = ', Math.cos(Math.PI / 3))
