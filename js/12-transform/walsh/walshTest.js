import {walsh} from './walsh.js'
import {dot, tr} from '../../../lib/matrix.ts'

var w2 = walsh(2)
var w4 = walsh(4)

console.log(w2)
console.log(w4)

var i2 = dot(w2, tr(w2))
var i4 = dot(w4, tr(w4))
console.log('i2=', i2)
console.log('i4=', i4)