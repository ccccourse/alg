## 轉換化約法 Reduction 

Reduction 是將某問題轉換為另一問題後再求解，然後再將解答轉換回原問題的方法！

(這和 transform domain 有些不同，因為必須將問題整個轉化，而不是只有輸入數值轉化而已)

### 簡易範例

舉例而言，假如我們不知道怎麼做乘法 (a*b) ，但是卻知道怎麼做平方 (a^2)， 那麼我們可以透過下列方程式，將乘法的計算轉為平方的計算。

$`(a+b)^2 = a^2 + 2ab + b^2`$

$`2ab = (a+b)^2 - a^2 - b^2`$

$`ab = ((a+b)^2 - a^2 - b^2)/2`$

於是我們就可以透過計算 $`((a+b)^2 - a^2 - b^2)/2`$ 這個式子來計算乘法。


```js
function sqare(x) { .... }

function mul(a, b) {
  let ab2 = square(a+b)
  let a2 = square(a)
  let b2 = square(b)
  return (ab2-a2-b2)/2
}

```

## 線性規劃問題

* [線性規劃](https://zh.wikipedia.org/zh-hant/%E7%BA%BF%E6%80%A7%E8%A7%84%E5%88%92)
* [單純形法](https://zh.wikipedia.org/wiki/%E5%8D%95%E7%BA%AF%E5%BD%A2%E6%B3%95)

單純形法 : simplex/simplex.js

* https://github.com/LarryBattle/YASMIJ.js/
    * YASMIJ - Yet Another Simplex Method Library for javascript

```
D:\ccc\course\se\algorithm\15-reduction\simplex> node simplex
output= Output {
  result:
   { x1: 5, x2: 4, x3: 0, slack1: 0, slack2: 0, slack3: 0, z: 13 } }
```

## 整數規劃問題

* [整數規劃](https://zh.wikipedia.org/wiki/%E7%BA%BF%E6%80%A7%E8%A7%84%E5%88%92#%E6%95%B4%E6%95%B8%E8%A6%8F%E5%8A%83)

和線性規劃類似，但是要求所有變數都必須是整數！

## 二次規劃問題

* [二次規劃](https://zh.wikipedia.org/zh-hant/%E4%BA%8C%E6%AC%A1%E8%A7%84%E5%88%92)

條件方程式不再是線性的，而是二次形式的方程式，然後求某個算式的極大極小值！

## 非線性規劃

* [非線性規劃](https://zh.wikipedia.org/wiki/%E9%9D%9E%E7%BA%BF%E6%80%A7%E8%A7%84%E5%88%92)

條件方程式不限制形式，想要求某個算式的極大極小值！


## 最佳化

* [最佳化](https://zh.wikipedia.org/wiki/%E6%9C%80%E4%BC%98%E5%8C%96)
* https://en.wikipedia.org/wiki/Mathematical_optimization

## 最大網路流

* [網路流](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E6%B5%81)
* [最大流問題](https://zh.wikipedia.org/wiki/%E6%9C%80%E5%A4%A7%E6%B5%81%E9%97%AE%E9%A2%98)
* https://en.wikipedia.org/wiki/Maximum_flow_problem (有好的範例)

直接求解，使用以下套件。

* https://github.com/prabod/Graph-Theory-Ford-Fulkerson-Maximum-Flow


```
PS D:\ccc\course\se\algorithm\15-reduction\maxflow> node maxflow
The maximum possible flow is 23
```

## Reduction : 最大網路流 => 線性規劃問題

可以將最大網路流問題轉化為線性規劃，然後用線性規劃程式求解！

## 最大二分配對

maximum bipartite matching

* [二分圖](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E5%9B%BE)
* https://en.wikipedia.org/wiki/Hopcroft%E2%80%93Karp_algorithm
* https://www.geeksforgeeks.org/maximum-bipartite-matching/ (讚！有程式)

套件 : https://github.com/mikolalysenko/bipartite-matching


## Reduction : 最大二分配對 => 最大網路流

可以用將最大二分配對轉為最大網路流問題，只要加上來源和目標節點，然後連上兩邊即可。

### SAT 問題

學程式的人通常已經熟悉了布林代數式，以下是一些布林代數式的範例

```
x | y

x & y

!x | y

(x|y) & (x) & (!y)

```

對於某個布林代數式 B(x,y,...)，如果帶入某組值後 (例如 x=1, y=0, ...)，會使得該布林代數式 B(x,y, ...) = 1，那麼我們就稱該組滿足了 B。
 
SAT (Satisfiability) 就是在問布林代數式是否能被滿足的一個問題，希望我們能設計出一個演算法，假如 B 能被滿足，那麼就傳回 1，無法滿足時就傳回 0。

### 將 SAT 問題轉換為『整數規劃』問題

假如我們想尋找滿足某布林代數式 B 的解答，但是我們只會解『整數規劃』，那麼我們可以把布林代數式重寫成整數規劃方程式，這樣就可以用整數規劃算法求解布林代數式 B 的解答了。

以下是一個範例：

B = (x|y) & (!x) & (!y|x)

轉換成整數規劃

```
maximize E = (x+y)*(1-x)*((1-y)+x)

x + y >= 1
(1-x) >= 1
((1-y)+x) >= 1

x, y 為二進位整數 (0, 1)
 
```

這樣只要找到 E >= 1 的解答，就等於找到滿足布林代數式 B 的解答了！

## 