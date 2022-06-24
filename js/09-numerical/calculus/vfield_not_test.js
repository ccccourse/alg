// 函數 f 對變數 k 的偏微分: partial(p) / dk
function pdiff(f, p, k, h=0.01) {
  let p1 = Object.assign({}, p)
  p1[k] += h
  return (f(p1) - f(p)) / h
}

// 梯度 gradient : grad(f,x)=[pdiff(f,x,0), .., pdiff(f,x,n)]
function grad(f, x) {
  var gf = []
  for (var i = 0; i < x.length; i++) {
    gf[i] = pdiff(f, x, i)
  }
  return gf
}

// 散度 divergence : div(f,x) = sum(pdiff(j6[i],x,i))
function divergence(F, x) {
  var f = []
  var d = []
  for (var i = 0; i < x.length; i++) {
    f[i] = (xt) => F(xt)[i]
    d[i] = pdiff(f[i], x, i)
  }
  return sum(d)
}

// 旋度 curl : curl(F) = div(F)xF
// 限制：f 為 3 維向量函數 f(R3)->R3
function curl(F, x) {
  rx = df(f, p, 1)[2]-df(f, p, 2)[1]
  ry = df(f, p, 2)[0]-df(f, p, 0)[2]
  rz = df(f, p, 3)[1]-df(f, p, 1)[0]
}

// 線積分： int F●dr = int F(r(t))●r'(t) dt
function vintegral(F, r, a, b, dt) {
  dt = dt || F.dx
  var sum = 0
  for (var t = a; t < b; t += dt) {
    sum += dot(F(r(t)), diff(r, t))
  }
  return sum
}
