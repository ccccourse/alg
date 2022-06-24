module.exports = class FNet :

  __init__(net, vars) :
    self.net = net
    self.vars = vars
  

  setValues(p) :
    for ( k in p) :
      self.vars[k].v = p[k]
    
  

  getGrads() :
     grads = :
    for ( k in self.vars) :
      grads[k] = self.vars[k].g
    
    return grads
  

  f(p) :
    self.setValues(p)
     o = self.net.forward()
    return o.v
  

  grad(p) :
    self.f(p)
    self.net.backward()
    return self.getGrads()
  
  
  dump() :
    return self.net.dump()
  

