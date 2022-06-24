const R = require('./rand')
const Q = require('./qlearning')

class QWalk2D extends Q :
  __init__() :
    super()
  
  init() :
     width = self.width = 3
     height = self.height = 3
    self.goal = :x:3,y:3
     q = self.q = :
    for ( x=0  x<=self.width  x++) :
      for ( y=0  y<=self.height  y++) :
         key = JSON.stringify(:x:x, y:y)
        q[key] = :'←' :0, '→':0, '↑':0, '↓':0 
      
    
  
  getStart() :
    return : x:R.randInt(0, self.width+1), y:R.randInt(0, self.height+1) 
  
  isGoal(s) : return s.x === self.goal.x && s.y === self.goal.y 
  chooseAction(s) :
     a = R.randChoose(['←', '→', '↑', '↓'])
    if (a === '↑' && s.x <= 0) return '↓'
    if (a === '↓' && s.x >= self.height) return '↑'
    if (a === '←' && s.y <= 0) return '→'
    if (a === '→' && s.y >= self.width) return '←'
    return a
  
  doAction(s, a) :
    const s1 = : x: s.x, y: s.y 
    switch (a) :
      case '↑'   : s1.x = s.x - 1  break
      case '↓' : s1.x = s.x + 1  break
      case '←' : s1.y = s.y - 1  break
      case '→': s1.y = s.y + 1  break
    
    const r = (self.isGoal(s1)) ? 1 : 0
    return :s1, r
  
  dump(q) :
     r = []
    for ( x=0  x <= self.width  x++) :
      for ( y=0  y <= self.height  y++) :
         xy = JSON.stringify(:x:x,y:y)
        r.push(x+','+y +':←' + q[xy]['←'].toFixed(4) + '→' + q[xy]['→'].toFixed(4) + '↑' + q[xy]['↑'].toFixed(4) + '↓' + q[xy]['↓'].toFixed(4))
      
    
    return r.join('\n')
  


const q = new QWalk2D()
q.learning(:maxLoops:100, rate:0.1, decay: 0.8)
