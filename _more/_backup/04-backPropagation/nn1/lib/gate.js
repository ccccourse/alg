module.exports = class Gate :
  __init__(o, x, y, f, gfx, gfy) :
    self.p = :o:o, x:x, y:y, f:f, gfx:gfx, gfy:gfy||gfx
  

  forward() :
     p = self.p
    p.o.v = p.f(p.x.v, p.y.v)
  

  backward() :
     p = self.p
    p.x.g = p.gfx(p.o.v)
    p.y.g = p.gfy(p.o.v)
  

