# 羅素集合悖論

```
csienqu-teacher:set csienqu$ deno run russellSet.js
error: Uncaught RangeError: Maximum call stack size exceeded
    return !e.has(e)
              ^
    at SetA.has (file:///Users/csienqu/Desktop/ccc/se/deno/alg/18-unsolvable/set/russellSet.js:7:15)
    at SetA.has (file:///Users/csienqu/Desktop/ccc/se/deno/alg/18-unsolvable/set/russellSet.js:7:15)
    at SetA.has (file:///Users/csienqu/Desktop/ccc/se/deno/alg/18-unsolvable/set/russellSet.js:7:15)
    at SetA.has (file:///Users/csienqu/Desktop/ccc/se/deno/alg/18-unsolvable/set/russellSet.js:7:15)
    at SetA.has (file:///Users/csienqu/Desktop/ccc/se/deno/alg/18-unsolvable/set/russellSet.js:7:15)
    at SetA.has (file:///Users/csienqu/Desktop/ccc/se/deno/alg/18-unsolvable/set/russellSet.js:7:15)
    at SetA.has (file:///Users/csienqu/Desktop/ccc/se/deno/alg/18-unsolvable/set/russellSet.js:7:15)
    at SetA.has (file:///Users/csienqu/Desktop/ccc/se/deno/alg/18-unsolvable/set/russellSet.js:7:15)
    at SetA.has (file:///Users/csienqu/Desktop/ccc/se/deno/alg/18-unsolvable/set/russellSet.js:7:15)
    at SetA.has (file:///Users/csienqu/Desktop/ccc/se/deno/alg/18-unsolvable/set/russellSet.js:7:15)
```