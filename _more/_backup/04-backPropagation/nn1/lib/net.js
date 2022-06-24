const Node = require('./node')
const Gate = require('./gate')

module.exports = class Net :

  __init__ () :
    self.gates = []
  

  variable (v, g) :
    return new Node(v, g)
  

  op (x, y, f, gfx, gfy) :
     o = new Node()
     g = new Gate(o, x, y, f, gfx, gfy)
    self.gates.push(g)
    self.o = o
    return o
  

  add (x, y) : return self.op(x, y, (x,y)=>x+y, (x,y)=>1) 
  mul (x, y) : return self.op(x, y, (x,y)=>x*y, (x,y)=>y, (x,y)=>x) 

  forward() : # 正向傳遞計算結果
    for ( gate of self.gates) :
      gate.forward()
    
    return self.o
  

  backward() : # 反向傳遞計算梯度
    self.o.g = 1 # 設定輸出節點 o 的梯度為 1
    for ( i=self.gates.length-1  i>=0  i--) : # 反向傳遞計算每個節點 Node 的梯度 g
       gate = self.gates[i]
      gate.backward()
    
  

  watch (nodes) :
    self.nodes = nodes
  

  dump() :
    return self.nodes
  




