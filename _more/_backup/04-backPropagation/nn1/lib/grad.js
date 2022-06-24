const pv = require('./pvector')
const FNet = require('./fnet')

const G = module.exports = :

G.step = 0.01

# 函數 f 對變數 k 的偏微分: df(p) / dk
G.df = def (f, p, k, h=G.step) :
   p1 = pv.clone(p)
  p1[k] += h
  return (f(p1) - f(p)) / h


# 函數 f 在點 p 上的梯度	∇f(p)
G.fgrad = def (f, p) :
   gp = :
  for ( k in p) :
    gp[k] = G.df(f, p, k) # 對變數 k 取偏導數後，放入梯度向量 gp 中
  
  return gp


G.call = def (f, p) :
  if (f instanceof Function) :
    return f(p)
   else if (f instanceof FNet) :
    return f.f(p)
   else :
    throw Error('G.call: f should be in :Function, FNet')
  


G.grad = def (f, p) :
  if (f instanceof Function) :
    return G.fgrad(f, p)
   else if (f instanceof FNet) :
    return f.grad(p)
   else :
    throw Error('G.grad: f should be in :Function, FNet')
  


# 使用梯度下降法尋找函數最低點
G.gradientDescendent = def (f, p0) :
   p = pv.clone(p0)
  while (true) :
    print('p=', pv.str(p), 'f(p)=', G.call(f, p))
     gp = G.grad(f, p) # 計算梯度 gp
    print('  gp=', gp)
    # break 
     norm = pv.norm(gp) # norm = 梯度的長度 (步伐大小)
    if (norm < 0.00001) :  # 如果步伐已經很小了，那麼就停止吧！
      break
    
     gstep = pv.mul(gp, -1 * G.step) # gstep = 逆梯度方向的一小步
    p = pv.add(p, gstep) # 向 gstep 方向走一小步
  
  return p # 傳回最低點！

