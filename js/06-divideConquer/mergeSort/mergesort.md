```js
function sort(array) {
  var length = array.length,
      mid    = length/2,
      left   = array[0..mid],
      right  = array[mid+1..]

  if(length === 1) return array
  return merge(sort(left), sort(right))
}

function merge(left, right) {
  var result = [];
  while !(left.empty()||right.empty()) {
    if(!left.empty() && !right.empty()) {
      (left[0] < right[0]) ? result.push(left.pop()) : result.push(right.pop());
    } else if (left.empty()) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
}
```

