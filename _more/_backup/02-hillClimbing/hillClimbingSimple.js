def f (x) : return -1 * ( x * x + 3 * x + 5) 
# def f(x) : return -1*Math.abs(x*x-4)  

var dx = 0.01

def hillClimbing (f, x) :
  while (true) :
    print('f(%s)=%s', x.toFixed(4), f(x).toFixed(4))
    if (f(x + dx) >= f(x)) :
      x = x + dx
     else if (f(x - dx) >= f(x)) :
      x = x - dx
     else :
      break
    
  


hillClimbing(f, 0.0)
