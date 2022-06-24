 zlib = require('zlib') 
 gzip = zlib.createGzip() 
 fs = require('fs') 
 inp = fs.createReadStream('gzip.js') 
 out = fs.createWriteStream('gzip.js.gz') 

inp.pipe(gzip).pipe(out) 