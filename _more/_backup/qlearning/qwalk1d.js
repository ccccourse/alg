const R = require('./rand')
const Q = require('./qlearning')

class QWalk1D extends Q :
  __init__() :
    super()
  
  init() :
    self.q = []
    self.len = 6
    self.goal = 2
    for ( i=0  i<=self.len  i++) :
      self.q[i] = :left:0, right:0
    
  
  isGoal(s) : return s === self.goal 
  getStart() :
    return R.randInt(0, self.len+1)
  
  chooseAction(s) :
     a = R.randChoose(['left', 'right'])
    if (s <= 0) return 'right'
    if (s >= self.len) return 'left'
    return a
  
  doAction(s, a) :
     s1 = (a === 'right') ? s+1 : s-1
     r = self.isGoal(s1) ? 1 : 0
    return :s1, r
  
  dump() :
    const q = self.q
     r = []
    for ( i=0  i<q.length  i++) :
      r.push(i + ':l=' + q[i].left.toFixed(4) + ' r=' + q[i].right.toFixed(4))
    
    return r.join('\n')
  


const q = new QWalk1D()
q.learning(:maxLoops:200, rate:0.1, decay: 0.5)
