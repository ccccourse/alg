# 參考 https://en.wikipedia.org/wiki/Q-learning
# https://morvanzhou.github.io/tutorials/machine-learning/reinforcement-learning/2-1-general-rl/

class Q :
  __init__ () :
    self.init()
  
  learning(arg) :
     q = self.q
    # self.init()
    for (var loop=0  loop < arg.maxLoops  loop ++) :
       s0 = self.getStart()
       s0s = JSON.stringify(s0)
      while (!self.isGoal(s0)) :
         a = self.chooseAction(s0)
         :s1, r = self.doAction(s0, a)
         s1s = JSON.stringify(s1)
        q[s0s][a] = (1-arg.rate) * q[s0s][a] + arg.rate * (r + arg.decay * self.argmax(q[s1s])) # self.argmax(q[s1]) 是下個狀態的最大報酬
        s0 = s1
      
      print('======= dump: %d =====\n%s', loop, self.dump(q))
    
  
  init() : throw new Error('not defined!')  # 隨機初始化 q 表
  isGoal(s) : throw new Error('not defined!')  # 判斷是否已到達目標
  getStart() : throw new Error('not defined!')  # 取得起始點
  chooseAction(s) : throw new Error('not defined!')  # 選取在 s 狀態的動作 a
  doAction(s,a) : throw new Error('not defined!')  # 在狀態 s 做 a 動作時，會跑到 s1 狀態，並得到 reward r
  argmax(qs) : # 取的報酬最大的狀態
     max = Number.NEGATIVE_INFINITY
    for ( k in qs) :
      if (qs[k] > max) max = qs[k]
    
    return max
  
  dump(q) : throw new Error('not defined!')  # 傳回想印出的狀態字串


module.exports = Q
