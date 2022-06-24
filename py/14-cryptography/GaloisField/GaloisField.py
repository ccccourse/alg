def groupList(ra, op, rb, p) :
  print('============================')
  for ( a = ra.min  a <= ra.max  a++) :
    print()
    for ( b = rb.min  b <= rb.max  b++) :
       ab = (op==='*')?a*b:a+b
      ab = ab % p
      print(a, op, b, '=', ab, 'mod', p)
    
  


 ra = :min: 0, max: 6
groupList(ra, '+', ra, 7)
groupList(ra, '*', ra, 7)