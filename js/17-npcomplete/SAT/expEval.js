let assign = {x:false, y:true, z:true}
let {x,y,z} = assign
let exp = '(x||y)&&(x||!z)'
let result = eval(exp)
console.log('exp=', exp, ' assign=', assign, ' result=', result)
