# SAT

## expEval.js

```
PS D:\ccc\ccc109a\se\deno\alg\17-npcomplete\SAT> deno run expEval.js
exp= (x||y)&&(x||!z)  assign= { x: false, y: true, z: true }  result= false
```

## sat.js

sat.js 有用 with ，但 deno 是 es6 語法，不允許非 strict mode 的陳述，因此得用 node.js 跑 sat.js


```
PS D:\ccc\ccc109a\se\deno\alg\17-npcomplete\SAT> node sat.js
exp= (x||y)&&(!x||!z)&&(x)&&(y)
{"x":0,"y":0,"z":0} => 0
{"x":0,"y":0,"z":1} => 0
{"x":0,"y":1,"z":0} => 0
{"x":0,"y":1,"z":1} => 0
{"x":1,"y":0,"z":0} => 0
{"x":1,"y":0,"z":1} => 0
{"x":1,"y":1,"z":0} => 1
[ 1, 1, 0 ]
exp= (x)&&(!x)&&(!y)&&(!z)
{"x":0,"y":0,"z":0} => 0
{"x":0,"y":0,"z":1} => 0
{"x":0,"y":1,"z":0} => 0
{"x":0,"y":1,"z":1} => 0
{"x":1,"y":0,"z":0} => 0
{"x":1,"y":0,"z":1} => 0
{"x":1,"y":1,"z":0} => 0
{"x":1,"y":1,"z":1} => 0
undefined
PS D:\ccc\ccc109a\se\deno\alg\17-npcomplete\SAT> 
```

## 參考

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
* https://stackoverflow.com/questions/62004574/how-to-execute-deno-without-strict-mode-error-uncaught-syntaxerror-identifie