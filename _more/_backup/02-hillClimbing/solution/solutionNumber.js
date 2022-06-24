var Solution = require("./solution")          # 引入解答類別

Solution.prototype.neighbor = def() :    # 單變數解答的鄰居函數。
  var x = self.v, dx=self.step                # x:解答 , dx : 移動步伐大小
  var xnew = (Math.random() > 0.5)?x+dx:x-dx  # 用亂數決定向左或向右移動
  return new Solution(xnew)                   # 建立新解答並傳回。


Solution.prototype.energy = def() :      # 能量函數
  var x = self.v                              # x:解答
  return Math.abs(x*x-4)                      # 能量函數為 |x^2-4|


Solution.prototype.toString = def() :    # 將解答轉為字串，以供印出觀察。
  return "energy("+self.v.toFixed(3)+")="+self.energy().toFixed(3) 


module.exports = Solution                     # 將解答類別匯出。