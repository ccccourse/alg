var groupList = function (ra, op, rb, p) {
  console.log('============================')
  for (let a = ra.min; a <= ra.max; a++) {
    console.log()
    for (let b = rb.min; b <= rb.max; b++) {
      let ab = (op==='*')?a*b:a+b
      ab = ab % p
      console.log(a, op, b, '=', ab, 'mod', p)
    }
  }
}

let ra = {min: 0, max: 6}
groupList(ra, '+', ra, 7)
groupList(ra, '*', ra, 7)