const nn = require('../../nn')
const f = require('./f')

print('df(f(x:1,y:1), x) = ', nn.df(f, :x:1, y:1, 'x'))

print('grad(f(x:1,y:1))=', nn.grad(f, :x:1, y:1))
