var Solution = require("./solution")          # 引入抽象的解答類別

Solution.prototype.neighbor = def() :    # 多變數解答的鄰居函數。
  var nv = self.v.slice(0)                    # nv=v.clone()=目前解答的複製品
  var i = Math.floor(Math.random()*nv.length) # 隨機選取一個變數
  if (Math.random() > 0.5)                    # 擲骰子決定要往左或往右移
    nv[i] += self.step 
  else
    nv[i] -= self.step 
  return new Solution(nv)                     # 傳回新建的鄰居解答。


Solution.prototype.energy = def() :      # 能量函數
  var x=self.v[0], y=self.v[1], z=self.v[2] 
  return x*x+3*y*y+z*z-4*x-3*y-5*z+8          # (x^2+3y^2+z^2-4x-3y-5z+8)


var numbersToStr=def(array, precision) : # 將數字陣列轉為字串的函數。
  var rzStr = "" 
  for (var i=0  i<array.length  i++) :
    if (array[i]>=0)
      rzStr+=" "+array[i].toFixed(precision)+" " 
    else
      rzStr+=array[i].toFixed(precision)+" " 
  
  return rzStr 



Solution.prototype.toString = def() :    # 將解答轉為字串的函數，以供列印用。
  return "energy("+numbersToStr(self.v, 3)+")="+self.energy().toFixed(3) 


module.exports = Solution                     # 將解答類別匯出。