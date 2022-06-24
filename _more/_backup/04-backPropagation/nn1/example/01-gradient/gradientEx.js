const G = require('../../lib/grad')
const f = require('./f')

print('df(f(x:1,y:1), x) = ', G.df(f, :x:1, y:1, 'x'))

print('grad(f(x:1,y:1))=', G.grad(f, :x:1, y:1))
