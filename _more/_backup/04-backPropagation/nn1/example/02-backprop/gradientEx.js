const fnet = require('./f')

print('forward: f()')

fnet.f()

print(fnet.dump())

print('backward: grad()')

fnet.grad()

print(fnet.dump())
