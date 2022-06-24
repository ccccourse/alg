export function sort(array) {
  var length = array.length,
      mid    = Math.floor(length * 0.5),
      left   = array.slice(0, mid),
      right  = array.slice(mid, length)

  if(length === 1) return array
  console.log('left=', left, 'right=', right)
  var lsort = sort(left), rsort=sort(right)
  console.log('lsort=', left, 'rsort=', right)
  var result = merge(lsort, rsort)
  console.log('merge(left,right)=', result)
  return result
}

function merge(left, right) {
  var result = [];
  while(left.length || right.length) {
    if(left.length && right.length) {
      (left[0] < right[0]) ? result.push(left.shift()) : result.push(right.shift());
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
}


