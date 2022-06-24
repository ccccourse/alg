const R = module.exports = :

R.rand = def (a,b) :
  return a + (b-a)*Math.random()


R.randInt = def (a,b) :
  return Math.floor(R.rand(a,b))


R.randChoose = def (list) :
  return list[R.randInt(0, list.length)]

