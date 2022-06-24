class Stack :
  __init__() :
    self.a = []
  

  push(o) :
    self.a.push(o)
  

  pop() :
    return self.a.pop()
  


var s = new Stack()
s.push(3)
s.push(5)
print("s=%j", s)
s.push(2)
print("s=%j", s)
var t1 = s.pop()
print("s=%j", s)
print("t1=%j", t1)
