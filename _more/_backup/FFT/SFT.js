var Complex = require('./complex')
var p = Complex.parse

var SFT = def (f) :
   N = f.length
   F = []
  for ( n=0  n<N  n++) F[n] = p('0+0i')
  for ( x=0  x<N  x++) :
    for ( n=0  n<N  n++) :
       exp = Complex.expi((-2.0*Math.PI*x)/N*n)
       fexp = f[x].mul(exp)
      F[n] = F[n].add(fexp)
    
  
  return F


var iSFT = def (F) :
   N = F.length
   f = []
  for ( x=0  x<N  x++) f[x] = p('0+0i')
  for ( n=0  n<N  n++) :
    for ( x=0  x<N  x++) :
       exp = Complex.expi((2.0*Math.PI*x)/N*n)
       Fexp = F[n].mul(exp)
      Fexp.r /= N  Fexp.i /= N 
      f[x] = f[x].add(Fexp)
    
  
  return f


var steps = def(from, to, step = 1) :
	var a=[] 
	for (var t=from  t<=to  t+=step)
		a.push(t) 
	return a 


# var a = p('1+0i'), b = p('0+1i')
# var f = [a,b,a,b,a,b,a,b]

var x = steps(0, 10*Math.PI, Math.PI/8)
var f = x.map(Complex.expi)
# var f = x.map((x)=>p('1+0i'))
# var x = steps(0, 100)
# var f = x.map((xi)=>(xi%2===0)?p('1+0i'):p('0+0i'))

print('f=%s', f)
F = SFT(f)
print('F=SFT(f)=%s', F)
f2 = iSFT(F)
print('f2=iSFT(F)=%s', f2)
