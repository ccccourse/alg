const pv = module.exports = :

pv.add = def (p1, p2) :
   p = :
  for ( k in p1) :
    p[k] = p1[k] + p2[k]
  
  return p


pv.sub = def (p1, p2) :
  return pv.add(p1, pv.neg(p2))


pv.mul = def (p1, c) :
   p = :
  for ( k in p1) :
    p[k] = p1[k] * c
  
  return p


pv.neg = def (p) :
  return pv.mul(p, -1)


pv.norm = def (p) :
   norm = 0
  for ( k in p) :
    norm += p[k] * p[k]
  
  return norm


pv.str = def (p, len=4) :
   lines = []
  for ( k in p) :
    lines.push(k+':'+p[k].toFixed(len))
  
  return ':' + lines.join(', ') + ''
