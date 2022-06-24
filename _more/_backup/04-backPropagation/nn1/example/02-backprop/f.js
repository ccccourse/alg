const nn = require('../../nn')
const net = new nn.Net()

 x = net.variable(2)
 y = net.variable(1)
 x2 = net.mul(x, x)
 y2 = net.mul(y, y)
 o  = net.add(x2, y2)

net.watch(:x,y,x2,y2,o)

module.exports = new nn.FNet(net, :x:x, y:y)
