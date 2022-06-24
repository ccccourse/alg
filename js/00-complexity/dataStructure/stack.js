class Stack {
  constructor() {
    this.a = []
  }

  push(o) {
    this.a.push(o)
  }

  pop() {
    return this.a.pop()
  }
}

var s = new Stack()
s.push(3)
s.push(5)
console.log("s=", s)
s.push(2)
console.log("s=", s)
var t1 = s.pop()
console.log("s=", s)
console.log("t1=", t1)
