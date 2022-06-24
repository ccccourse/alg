# 查表法 (Table Lookup)

## 翻譯系統

執行結果

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc/ccc109a/se/_more/deno/alg/01-tableLookup (master)
$ deno run e2c.js a dog chase a cat
[ "一隻", "狗", "追", "一隻", "貓" ]
```

## 用查表加速 -- 以費氏數列為例

傳統用遞迴方式的費氏數列算法，會耗費很久的時間：

```js
function fibonacci (n) {
  if (n < 0) throw Error('fibonacci:n < 0')
  if (n === 0) return 0
  if (n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

var startTime = Date.now()
console.log('fibonacci(43)=', fibonacci(43))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)

```

執行結果:

```
$ node .\fiboanacci.js
fibonacci(43)= 433494437
time:25530ms
```

加入查表，讓已經算過的就不需要算第二次，第二次之後改用查的！

```js
var fib = [0, 1]

function fibonacci (n) {
  if (n < 0) throw Error('fibonacci:n < 0')
  if (fib[n] != null) return fib[n]
  fib[n] = fibonacci(n - 1) + fibonacci(n - 2)
  return fib[n]
}

var startTime = Date.now()
console.log('fibonacci(43)=', fibonacci(43))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)

```

執行結果

```
$ node .\fiboanacci_lookup.js
fibonacci(43)= 433494437
time:14ms
```

