var Solution = def(v) : # 解答的物件模版 (類別)
  self.v = v                 # 參數 v 為解答的資料結構


Solution.prototype.step = 0.01           # 每一小步預設走的距離

Solution.prototype.height = def() : # 爬山演算法的高度函數
  return -1*self.energy()                # 高度 = -1 * 能量


module.exports = Solution    # 將解答類別匯出。