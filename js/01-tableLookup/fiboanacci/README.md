# 用查表加速 -- 以費氏數列為例

傳統用遞迴方式的費氏數列算法，會耗費很久的時間：

```
PS D:\ccc\ccc109\se\deno\alg\01-tableLookup\fiboanacci> deno run fibonacci.js
fibonacci(40)=102334155
time:6519ms

```

加入查表，讓已經算過的就不需要算第二次，第二次之後改用查的，就會變很快！

```
PS D:\ccc\ccc109\se\deno\alg\01-tableLookup\fiboanacci> deno run fibonacci_lookup.js
fibonacci(40)=102334155
time:13ms
```
