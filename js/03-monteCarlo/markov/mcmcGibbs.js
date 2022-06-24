import P from './prob.js'

const rnd = Math.random
function mcmc() { // Monte Carlo Markov Chain
  let s1 = (rnd() < P['a']) ? 'a' : 'b' // 隨機選定一個初始狀態 (s1 初始狀態是 a 還是 b)
  let s2 = (rnd() < P[s1+'=>'+'a']) ? 'a' : 'b' // 從初始狀態會轉到的下一個狀態
  if (s1 == s2) return // 如果沒有轉移，那麼不影響機率
  P[s1] -= 0.0001 // 否則、初始狀態的機率減小一點點
  P[s2] += 0.0001 // 然後、下一個狀態的機率增加一點點。
}

function gibbs(n) {
  for (let i=0; i<n; i++) {
    mcmc()
  }
}

console.log("P=", P)
gibbs(1000000)
console.log('P=', P)

