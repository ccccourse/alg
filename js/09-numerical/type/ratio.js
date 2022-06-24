/*
function gcd(a, b) {  
  if (!b) return a
  return gcd(b, a % b)
}
*/
function gcd(a, b) {
  var r = b  
  while (true) {
    r = a%b
    if (r=='0') break
    a = b
    b = r
  }
  return b
}

console.log('gcd(15, 10)=', gcd(15, 10))
console.log('gcd(10, 15)=', gcd(10, 15))
let a=10000000000002n, b=15999999999999n
console.log(`gcd(${a}, ${b})=${gcd(a, b)}`)

class Ratio {
  constructor(a,b) { this.a = a; this.b = b; }
  
  mul(r2) { return new Ratio(this.a*r2.a, this.b*r2.b); }
  
  div(r2) { return new Ratio(this.a*r2.b, this.b*r2.a); }
  
  inv() { return new Ratio(this.b, this.a); }
  
  add(r2) { return new Ratio(this.a*r2.b+this.b*r2.a, this.b*r2.b); }
  
  sub(r2) { return new Ratio(this.a*r2.b-this.b*r2.a, this.b*r2.b); }
  
  toString() { return this.a+'/'+this.b; }

  reduce() {
    let g = gcd(this.a,this.b)
    return new Ratio(this.a/g, this.b/g)
  }

  parse(s) {
    var m = s.match(/^(\d+)(\/(\d+))?$/);
    var a = parseInt(m[1]);
    var b = typeof m[3]==='undefined'?1:parseInt(m[3]);
    return new Ratio(a, b)
  } 
}

Ratio.parse = Ratio.prototype.parse;

var r0 = Ratio.parse('1/2');
console.log(r0);

r0 = Ratio.parse('1');
console.log(r0);

var r1 = new Ratio(2,3);
console.log(r1.toString());

var r2 = r1.mul(r1).add(r1);
console.log(r2.toString());

console.log('gcd(15, 10)=', gcd(15, 10))
console.log('r2.reduce()=', r2.reduce().toString())
