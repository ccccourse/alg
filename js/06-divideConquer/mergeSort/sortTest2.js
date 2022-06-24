import {sort} from './mergesort2.js'

console.log(sort([3,7,2,9,5,1,8,4]))
// [3,7,2,9,5,1,8,4]
// left = [3,7,2,9], right=[5,1,8,4]
// sort(left) = [2,3,7,9], sort(right)=[1,4,5,8]
// merge(sort(left), sort(right))=[1,2,3,4,5,7,8,9]