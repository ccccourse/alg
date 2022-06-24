# regular expression

## regexp1.js

```
PS D:\ccc\ccc109a\se\deno\alg\13-string\regularExpression> deno
Deno 1.2.0
exit using ctrl+d or close()
> 'aaa123bbb'.match(/[0-9]+/)
[ "123" ]
> 'aaa123bbb'.match(/[a-z]+/g)
[ "aaa", "bbb" ]
> 'tel: 082-313534 email:ccc@nqu.edu.tw department: csie'.match(/[0-9\-]+/)
[ "082-313534" ]
> 'tel: 082-313534 email:ccc@nqu.edu.tw department: csie'.match(/[\d\-]+/)
[ "082-313534" ]
> 'tel: 082-313534 email:ccc@nqu.edu.tw department: csie'.match(/email:([\w\.]+@[\w\.]+)/)
[ "email:ccc@nqu.edu.tw", "ccc@nqu.edu.tw" ]
```

## regexp2.js

```
PS D:\ccc\ccc109a\se\deno\alg\13-string\regularExpression> deno run regexp2.js
[ "0823-13534" ]
[ "0977-313456" ]
[ "02-22123456" ]
```