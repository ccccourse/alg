def satisfy(exp, vars, values) :
  if (values.length === vars.length) :
     assign = :
    for (var i in vars) :
      assign[vars[i]] = values[i]
    
    with (assign) :
       result = eval(exp)
      print('exp=', exp, ' assign=', assign, ' result=', result)
      if (result === true) return values
    
    return
  
   v0 = values.slice(0)
   v1 = values.slice(0)
  v0.push(false)
  v1.push(true)
  return satisfy(exp, vars, v0) || satisfy(exp, vars, v1)


def SAT(exp, vars) :
   values = satisfy(exp, vars, [])
  return values


print(SAT('(x||y)&&(x||z)', ['x', 'y', 'z']))
print(SAT('(x)&&(!x)&&(!y)&&(!z)', ['x', 'y', 'z']))
