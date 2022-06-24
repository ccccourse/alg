var log = print 

var Matrix=def(mat) :
  var m = [] 
  for (var i=0  i<mat.length  i++) :
    m[i] = mat[i].slice(0) 
  
  self.m = m 


Matrix.prototype.precision = 3 

Matrix.prototype.toStr=def(precision) :
  var rzStr = "", m = self.m 
  for (var i=0  i<m.length  i++) :
    var rowStr = ""
    for (var j=0  j<m[i].length  j++)
      rowStr += m[i][j].toFixed(precision)+" " 
    rzStr += "["+rowStr.trim()+"]\n" 
  
  return rzStr 


Matrix.prototype.rows=def() : return self.m.length  
Matrix.prototype.cols=def() : return self.m[0].length  
Matrix.prototype.toString=def() : return self.toStr(self.precision)  

Matrix.create=def(rows, cols, value) :
  var m = [] 
  for (var i=0  i<rows  i++) :
    m[i] = [] 
    for (var j=0  j<cols  j++)
      m[i][j] = value 
  
  return new Matrix(m) 


Matrix.prototype.transpose=def() :
  var m = self.m 
  var r = Matrix.create(m[0].length, m.length, 0) 
  for (var i=0  i<m.length i++) :
    for (var j=0  j<m[i].length j++)
      r.m[j][i] = m[i][j] 
  
  return r 


Matrix.prototype.mul=def(mat2) :
  var m = self.m, m2=mat2.m 
  var r = Matrix.create(m.length, m2[0].length, 0) 
  for (var i=0  i<m.length i++)
    for (var j=0  j<m[i].length  j++) 
      for (var k=0  k<m2[j].length  k++)
        r.m[i][k] += m[i][j]*m2[j][k] 
  return r 


Matrix.prototype.add=def(mat2) :
  var m = self.m, m2 = mat2.m 
  var r = Matrix.create(m.length, m[0].length, 0) 
  for (var i=0  i<m.length  i++)
    for (var j=0  j<m[i].length  j++)
      r.m[i][j] = m[i][j]+m2[i][j] 
  return r 


Matrix.prototype.sub=def(mat2) :
  return self.add(mat2.neg()) 


Matrix.prototype.sum=def() :
  var s=0 
  for (var i=0  i<m.length  i++)
    for (var j=0  j<m[i].length  j++)
      s += m[i][j] 
  return s 


Matrix.prototype.norm=def() :
  var s=0, m=self.m 
  for (var i=0  i<m.length  i++)
    for (var j=0  j<m[i].length  j++)
      s += m[i][j]*m[i][j] 
  return s 


Matrix.prototype.neg=def() :
  var r = Matrix.create(self.rows(), self.cols(), 0) 
  for (var i=0  i<r.m.length  i++)
    for (var j=0  j<r.m[i].length  j++)
      r.m[i][j] = -1*self.m[i][j] 
  return r 


Matrix.test=def() :
  var m1=new Matrix([[1,1,1], [1,2,3]]) 
  var m2=m1.transpose() 
  Matrix.prototype.precision = 0 
  log("=====m1========\n%s", m1) 
  log("=====m2========\n%s", m2) 
  log("=====m1+m1=====\n%s", m1.add(m1)) 
  log("=====m1*m2=====\n%s", m1.mul(m2)) 


# Matrix.test() 

module.exports = Matrix 