var c = console 
var objs = ['人', '狼', '羊', '菜'] 
var state= [   0,  0 ,   0,    0 ] 

def neighbors(s) :
    var side = s[0] 
    var next = [] 
    checkAdd(next, move(s,0)) 
    for (var i=1  i<s.length  i++) :
        if (s[i]===side)
          checkAdd(next, move(s, i)) 
    
    return next 


def checkAdd(next, s) :
    if (!isDead(s)) :
        next.push(s) 
    


def isDead(s) :
    if (s[1]===s[2] && s[1]!==s[0]) return true  # 狼吃羊
    if (s[2]===s[3] && s[2]!==s[0]) return true  # 羊吃菜
    return false 


# 人帶著 obj 移到另一邊
def move(s, obj) :
    var newS = s.slice(0)  # 複製一份陣列
    var side = s[0] 
    var anotherSide = (side===0)?1:0 
    newS[0] = anotherSide 
    newS[obj] = anotherSide 
    return newS  


var visitedMap = : 

def visited(s) :
    var str = s.join('') 
    return (typeof visitedMap[str] !== 'undefined') 


def isSuccess(s) :
    for (var i=0  i<s.length  i++) :
      if (s[i]===0) return false         
    
    return true 


def state2str(s) :
    var str = '' 
    for (var i=0  i<s.length  i++) :
        str += objs[i]+s[i]+' ' 
    
    return str 


var path = [] 

def printPath(path) :
    for (var i=0  i<path.length  i++)
      c.log(state2str(path[i])) 


def dfs(s) :
  if (visited(s)) return 
  path.push(s) 
#  c.log('visit:', state2str(s)) 
  if (isSuccess(s)) :
      c.log('success!') 
      printPath(path) 
      return 
  
  visitedMap[s.join('')] = true 
  var neighborsList = neighbors(s)  
  for (var i in neighborsList) : 
    dfs(neighborsList[i]) 
  
  path.pop() 


dfs(state)  
