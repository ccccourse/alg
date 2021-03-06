# P(C|F1...Fn) = P(C) * P(F1|C) * ....* P(Fn|C)
def naiveBayesProb(prob, c, f) :
   p = prob[c]
  for ( fi of f) p = p*prob[c+'=>'+fi]
  return p


const prob = :
  'c1': 0.6, 'c2': 0.4,
  'c1=>f1': 0.5, 'c1=>f2': 0.8, 'c1=>f3': 0.6,
  'c2=>f1': 0.7, 'c2=>f2': 0.6, 'c2=>f3': 0.2,


for ( c of ['c1', 'c2']) :
  print('P(%s|f1,f2) = ', c, naiveBayesProb(prob, c, ['f1','f2']).toFixed(3))

