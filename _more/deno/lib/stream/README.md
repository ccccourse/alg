# stream

## stream1.js

```
$ deno run -A stream1.js
Uint8Array(453) [
  123, 10,  32, 32,  34,  97, 114, 103, 115, 34, 58,  32, 123, 125,  44,
   32, 10,  32, 32,  34, 100,  97, 116,  97, 34, 58,  32,  34,  92, 117,
   48, 48,  48, 49,  92, 117,  48,  48,  48, 50, 92, 117,  48,  48,  48,
   51, 92, 117, 48,  48,  48,  52,  92, 117, 48, 48,  48,  53,  92, 117,        
   48, 48,  48, 54,  34,  44,  32,  10,  32, 32, 34, 102, 105, 108, 101,        
  115, 34,  58, 32, 123, 125,  44,  32,  10, 32, 32,  34, 102, 111, 114,        
  109, 34,  58, 32, 123, 125,  44,  32,  10, 32,
  ... 353 more items
]
```

## transform1.js

```
$ deno run -A transform1.js
HELLO, 
WORLD!
```

## decode1.js

```
$ deno run -A decode1.js
<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />       
    <meta name="viewport" content="width=device-width, initial-scale=1" />      
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>
```

## compress1.js

```
$ deno run -A compress1.js
```

會產生 file.gz

## decompress1.js

```
$ deno run -A decompress1.js
```

會產生 file2.txt
