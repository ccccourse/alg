var R = require('./random')
'''
for (var i=0  i<10  i++) :
  var animal = randSelect(['dog', 'cat']) 
  print("%s", animal) 

'''
'''
S = NP VP
NP = DET N
VP = V NP
N = dog | cat
V = chase | eat
DET = a | the
'''

def S() :
  return NP()+" "+VP() 


def NP() :
  return DET()+" "+N() 


def VP() :
  return V()+" "+NP() 


def N() :
  return R.randSelect(["dog", "cat"]) 


def V() :
  return R.randSelect(["chase", "eat"]) 


def DET() :
  return R.randSelect(["a", "the"]) 


print(S()) 