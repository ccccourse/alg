# 幾何學算法

## 幾何運算 -- 平移，縮放，旋轉

* [維基百科: 旋轉矩陣](https://zh.wikipedia.org/wiki/%E6%97%8B%E8%BD%AC%E7%9F%A9%E9%98%B5)

* [對程式人有用的《幾何學》](https://www.slideshare.net/ccckmit/ss-102708692)

## 內積與外積

a, b 分別為二維向量，則其內積 (inner product) 與叉積 (cross product) 分別定義如下：

1. 內積 : $`a \cdot b = a_0*b_0 + a_1*b_1`$
2. 叉積 : $`a \times b = a_0*b_1 - a_1*b_0`$

性質： 

1. 內積 = $`|a||b| cos(\theta)`$
2. 叉積 = $`|a||b| sin(\theta)`$

我們可以用《內積》來判斷兩向量是同向或反向，然後用叉積來判斷兩向量之間是《順時針關係》還是《逆時針關係》(左轉還是右轉)。

## 向量

向量物件: vector.js

```js
const V = module.exports = {}

// 向量相加 : a+b = [a0+b0, a1+b1, ...]
V.add = function (a,b) {
  let len = a.length, r = new Array(len)
  for (let i=0; i<len; i++) {
    r[i] = a[i] + b[i]
  }
  return r
}

// 向量相減 : a-b = [a0-b0, a1-b1, ...]
V.sub = function (a,b) {
  let len = a.length, r = new Array(len)
  for (let i=0; i<len; i++) {
    r[i] = a[i] - b[i]
  }
  return r
}

// 內積 a0*b0+a1*b1+...
V.dot = function (a,b) {
  let len = a.length, r = 0
  for (let i=0; i<len; i++) {
    r += a[i] * b[i]
  }
  return r
}

// 叉積 a0*b1-a1*b0 (只適用於二維向量)
V.cross = function (a,b) {
  return a[0]*b[1]-a[1]*b[0]
}
```

測試 : vectorTest.js

```
let V = require('./vector')

let x = [1,2], y = [3,4]

console.log('add(x, y)=', V.add(x,y))
console.log('sub(x, y)=', V.sub(x,y))
console.log('dot(x, y)=', V.dot(x,y))
console.log('cross(x, y)=', V.cross(x,y))

```

執行結果

```
PS D:\ccc\course\se\algorithm\15-geometry> node vectorTest
add(x, y)= [ 4, 6 ]
sub(x, y)= [ -2, -2 ]
dot(x, y)= 11
cross(x, y)= -2
```

## 幾何基本函數

```js
const V = require('./vector')
const G = module.exports = {}

// 檢測轉向：結果為正代表是順時針右轉 (負代表逆時針左轉)
G.direction = function (p0, p1, p2) {
  return V.cross(V.sub(p2, p0), V.sub(p1, p0))
}

// 檢測 pk 是否位於 pi, pj 所形成的矩形內部。
G.inBox = function (pi, pj, pk) {
  let min = Math.min, max = Math.max
  return (min(pi[0], pj[0]) <= pk[0] && pk[0] <= max(pi[0], pj[0]) &&
          min(pi[1], pj[1]) <= pk[1] && pk[1] <= max(pi[1], pj[1]))
}

// 檢測 (p1, p2) 和 (p3, p4) 是否相交 
G.intersect = function (p1, p2, p3, p4) {
  let d1 = G.direction(p3, p4, p1)
  let d2 = G.direction(p3, p4, p2)
  let d3 = G.direction(p1, p2, p3)
  let d4 = G.direction(p1, p2, p4)
  if (d1*d2 < 0 && d3*d4 < 0) return true
  if (d1===0 && G.inBox(p3, p4, p1)) return true
  if (d2===0 && G.inBox(p3, p4, p2)) return true
  if (d3===0 && G.inBox(p1, p2, p3)) return true
  if (d4===0 && G.inBox(p1, p2, p4)) return true
  return false
}

```

測試 geometryTest.js

```js
let G = require('./geometry')

let p0 = [0,0], p1 = [1,1], p2 = [2, 1], p3 = [-1, 0]

console.log('direction(p0, p1, p2)=', G.direction(p0, p1, p2))
console.log('intersect(p0, p1, p2, p3)=', G.intersect(p0, p1, p2, p3))

```

執行結果

```
PS D:\ccc\course\se\algorithm\15-geometry> node geometryTest
direction(p0, p1, p2)= 1
intersect(p0, p1, p2, p3)= true
```

## 計算 ConvexHall (凸殼)

Graham 掃描演算法 -- https://en.wikipedia.org/wiki/Graham_scan

```
let points be the list of points
let stack = empty_stack()

find the lowest y-coordinate and leftmost point, called P0
sort points by polar angle with P0, if several points have the same polar angle then only keep the farthest

for point in points:
    # pop the last point from the stack if we turn clockwise to reach this point
    while count stack > 1 and ccw(next_to_top(stack), top(stack), point) < 0:
        pop stack
    push point to stack
end
```

JavaScript 實作

```js
// 本函數修改自 GrahanScan -- https://github.com/lovasoa/graham-fast
// 另一種實作方法 -- https://www.nayuki.io/page/convex-hull-algorithm
G.convexHall = function GrahanScan(points) {
  // The enveloppe is the points themselves
  if (points.length <= 3) return points
  
  // Find the pivot
  var imin = 0, pmin = points[imin]
  for (var i=0; i<points.length; i++) {
    if (points[i][1] < pmin[1] || (points[i][1] === pmin[1] && points[i][0] < pmin[0])) {
      imin = i
      pmin = points[i]
    }
  }
  var t = points[0]; points[0] = points[imin]; points[imin] = t
  // Attribute an angle to the points
  points[0].angle = -9999
  for (var i=1; i<points.length; i++) {
    points[i].angle = V.pseudoPolarAngle(points[i], points[0]) // Math.atan2(points[i][1] - pivot[1], points[i][0] - pivot[0])
  }
  points.sort(function(a, b){ return a.angle === b.angle
                                        ? a[0] - b[0]
                                        : a.angle - b.angle})
  // Adding points to the result if they "turn left"
  var result = [points[0]], len=1
  for(var i=1; i<points.length; i++){
    var a = result[len-2],
        b = result[len-1],
        c = points[i]
    while (
        (len === 1 && b[0] === c[0] && b[1] === c[1]) || // 去除重複點
        (len > 1 && G.direction(a,b,c) >= 0)) { // 非左轉  // (b[0]-a[0]) * (c[1]-a[1]) <= (b[1]-a[1]) * (c[0]-a[0]))
        len--
        b = a
        a = result[len-2]
    }
    result[len++] = c
  }
  result.length = len
  return result
}

```

測試程式 ： convexTest.js

```js
let G = require('./geometry')

var points = [[0,0],[1,0],[1,1],[0,1],[.5,.5],[-1,-1]];
var convex = G.convexHall(points)
console.log(convex)
```

執行結果:

```
PS D:\ccc\course\se\algorithm\15-geometry> node convexTest
[ [ -1, -1, angle: -9999 ],
  [ 1, 0, angle: 0.4472135954999579 ],
  [ 1, 1, angle: 0.7071067811865475 ],
  [ 0, 1, angle: 0.8944271909999159 ] ]
```

## 套件

* https://github.com/YCAMInterlab/cga.js/
* https://github.com/ggolikov/convex-hull
* https://github.com/alexbol99/flatten-js

## 參考文獻

* https://www.cl.cam.ac.uk/teaching/1415/Algorithms/geometry2.pdf (讚!)
* https://www.geeksforgeeks.org/geometric-algorithms/
* https://geomalgorithms.com/
* https://www.cs.princeton.edu/~rs/AlgsDS07/16Geometric.pdf
* https://www.cs.princeton.edu/~rs/AlgsDS07/17GeometricSearch.pdf
* [Computational Geometry](https://people.inf.elte.hu/fekete/algoritmusok_msc/terinfo_geom/konyvek/Computational%20Geometry%20-%20Algorithms%20and%20Applications,%203rd%20Ed.pdf) (書)


