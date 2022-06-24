class Number :
  power(n) :
    var p = self 
    for (var i=1  i<n  i++) :
        p = p.mul(self) 
    
    return p 
  


var p = precision = 2
module.exports = class Complex extends Number :
  __init__(r,i) :
    super()
    self.r = r  
    self.i = i 
  

  static parse(s) :
    var m = s.match(/^([^\+]*)(\+(.*))?$/) 
    var a = parseFloat(m[1]) 
    var b = typeof m[3]==='undefined'?0:parseFloat(m[3]) 
    return new Complex(a, b)
  

  static expi(x) :
    return new Complex(Math.cos(x), Math.sin(x))
  

  add(c2) :
    return new Complex(self.r+c2.r, self.i+c2.i)
  

  sub(c2) :
    return new Complex(self.r-c2.r, self.i-c2.i)
  

  mul(c2) :
    return new Complex(self.r*c2.r-self.i*c2.i, 
                       self.r*c2.i+self.i*c2.r)
  

  toString() :
    return self.r.toFixed(p) + (self.i<0?self.i.toFixed(p):'+'+self.i.toFixed(p)) + 'i' 
  
