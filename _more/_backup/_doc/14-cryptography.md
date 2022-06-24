# 密碼學算法 Cryptography

主題                                  | 說明
--------------------------------------|---------------
[加密技術](./encrypt)|            
[破解密碼](./hack)|            
[AES 對稱式加解密法](./aes)|            
[RSA 非對稱型加解密演算法](./rsa)|            
[比特幣挖礦的背後 -- SHA 安全雜湊演算法](./hashcash)|            

## 數論

質因數分解問題，是密碼學算法的重要核心問題！

* [維基百科: 試除法](https://zh.wikipedia.org/wiki/%E8%AF%95%E9%99%A4%E6%B3%95)

```js
function factor(n) {
  for (let i=2; i < Math.sqrt(n); i++) {
    if (n % i == 0) return i
  }
  return -1
}

console.log('factor(15)=', factor(15))
console.log('factor(37)=', factor(37))
console.log('factor(9373467139)=', factor(9373467139))
// 以下大質數參考 《維基百科: 質數列表》 -- https://zh.wikipedia.org/wiki/%E8%B3%AA%E6%95%B8%E5%88%97%E8%A1%A8
console.log('factor(10000819)=', factor(10000819))
console.log('factor(3093215881333057)=', factor(3093215881333057))
console.log('factor(489133282872437279)=', factor(489133282872437279)) // 這個超越了 JavaScript 的安全整數表達限制範圍！
console.log('489133282872437279=', 489133282872437279)
console.log('489133282872437279.0=', 489133282872437279.0)
```

```
PS D:\ccc\course\se\algorithm\14-cryptography\factor> node factor
factor(15)= 3
factor(37)= -1
factor(9373467139)= 2141
factor(10000819)= -1
factor(3093215881333057)= -1
factor(489133282872437279)= 2
489133282872437279= 489133282872437250
```

## 公因數與 gcd 算法

```js
// Euclid's Algorithm 
// https://stackoverflow.com/questions/32042240/euclids-algorithm-javascript

var gcd = function(a, b) {  
  if (!b) return a
  return gcd(b, a % b)
}

console.log(gcd(462, 910))
```


## 對稱性加解密

對稱性加解密的方法有很多，像是DES、3DES、AES、Blowfish、IDEA、RC5、RC6 等等。

所謂的『對稱性』是指加解密所用的金鑰 key 是相同的，因此只要雙方都擁有該組金鑰，就可以成功的完成『加密後解密』的動作。

在此我們以 node.js 的 crypto 模組來展示 AES 加解密算法的過程。

檔案： aes.js

```js
var crypto = require('crypto')
var algorithm = 'aes-256-ctr'
var password = 'd6F3Efeq'

function encrypt(text) {
  var cipher = crypto.createCipher(algorithm, password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm, password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
 
var plainText  = "hello world"
var cipherText = encrypt(plainText)
var decryptText = decrypt(cipherText)
console.log('plainText  =', plainText)
console.log('cipherText =', cipherText)
console.log('decryptText=', decryptText)
``` 

執行結果：

```
$ node aes
plainText  = hello world
cipherText = 0c8bd89c2e316f7f2245e0
decryptText= hello world
```

## 非對稱性加解密

簡易 RSA 實作 (不支援超長整數）

檔案： simpleRsa.js

```js
unction mpower(a, n, p) {
  let r = a
  for (let i=2; i<=n; i++) {
    r = (r * a) % p
  }
  return r
}

var p = 61, q = 53, N = p*q // lcm(61,53)=780
let e = 17 , d = 413

// var p = 37, q = 67, N = p * q
// let e = 23, d = 

var M1 = [65, 22, 37, 18, 29]
var E1 = []
var M2 = []
for (let m of M1) {
  let c = mpower(m, e, N)
  E1.push(c)
  let m2 = mpower(c, d, N)
  M2.push(m2)
}

console.log('M1=', M1)
console.log('E1=', E1)
console.log('M2=', M2)
```

執行結果

```
$ node simpleRsa.js
M1= [ 65, 22, 37, 18, 29 ]
E1= [ 2790, 2558, 1350, 2100, 1912 ]
M2= [ 65, 22, 37, 18, 29 ]
```

## 電子簽章與驗證

```js
// openssl genrsa  -out server.pem 1024
// openssl req -key server.pem -new -x509 -out cert.pem

var crypto = require('crypto')
var fs = require('fs')

function signer(algorithm, privateKey, data){
  var signer = crypto.createSign(algorithm);
  signer.update(data);
  sigature = signer.sign(privateKey, 'hex');
  return sigature
}

function verify(algorithm, publicKey, sigature, data){
  var verify = crypto.createVerify(algorithm);
  verify.update(data);
  return verify.verify(publicKey, sigature, 'hex')
}

var algorithm = 'RSA-SHA256'
var data = "The data to be signed!"
var privateKey = fs.readFileSync('server.pem').toString()
var signature = signer(algorithm, privateKey, data)

var publicKey = fs.readFileSync('cert.pem').toString()
console.log('verify(data)=', verify(algorithm, publicKey, sigature, data))         // 驗證是否為公鑰發出者 (私鑰擁有者)
console.log('verify(data+xxx)=', verify(algorithm, publicKey, sigature, data + "xxx"))

```

產生證書

```
$ openssl genrsa  -out server.pem 1024
Generating RSA private key, 1024 bit long modulus
..+++++
...+++++
e is 65537 (0x10001)
csienqu-teacher:sign csienqu$ openssl req -key server.pem -new -x509 -out cert.pem
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:TW
State or Province Name (full name) [Some-State]:Kinmen
Locality Name (eg, city) []:Kinmen
Organization Name (eg, company) [Internet Widgits Pty Ltd]:nqu
Organizational Unit Name (eg, section) []:csie
Common Name (e.g. server FQDN or YOUR name) []:ccckmit
Email Address []:ccckmit@gmail.com
```

執行結果

```
$ node sign
verify(data)= true
verify(data+xxx)= false
```


## 參考

* [Node.js加密算法库Crypto](http://blog.fens.me/nodejs-crypto/)
* [AES-JS：JavaScript 的AES 對稱式資料加密工具- G. T. Wang](https://blog.gtwang.org/programming/javascript-aes-symmetric-encryption-tutorial/)
* 進階: 量子電腦 -- [Quantum Computing Concepts](https://www.youtube.com/playlist?list=PL50XnIfJxPDWDyea8EbbLe8GHfXkWU7W_)

## 因數分解

* [維基百科 : 整數分解](https://zh.wikipedia.org/wiki/%E6%95%B4%E6%95%B0%E5%88%86%E8%A7%A3)
    * [試除法](https://zh.wikipedia.org/wiki/%E8%AF%95%E9%99%A4%E6%B3%95)
    * [埃拉托斯特尼篩法](https://zh.wikipedia.org/wiki/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95)
    * [米勒-拉賓質數判定法](https://zh.wikipedia.org/wiki/%E7%B1%B3%E5%8B%92-%E6%8B%89%E5%AE%BE%E6%A3%80%E9%AA%8C)
    * [費馬質數判定法](https://zh.wikipedia.org/wiki/%E8%B4%B9%E9%A9%AC%E7%B4%A0%E6%80%A7%E6%A3%80%E9%AA%8C)
    * [維基百科 : 秀爾演算法](https://zh.wikipedia.org/wiki/%E7%A7%80%E7%88%BE%E6%BC%94%E7%AE%97%E6%B3%95) (量子算法！)

## 理論基礎

* [維基百科:有限體](https://zh.wikipedia.org/wiki/%E6%9C%89%E9%99%90%E5%9F%9F)
    * https://en.wikipedia.org/wiki/Finite_field

## 加解密

* [Node.js加密算法库Crypto](http://blog.fens.me/nodejs-crypto/) (讚！)
* https://nodejs.org/api/crypto.html
* [維基百科:密碼雜湊函式](https://zh.wikipedia.org/wiki/%E5%AF%86%E7%A2%BC%E9%9B%9C%E6%B9%8A%E5%87%BD%E6%95%B8)
    * https://en.wikipedia.org/wiki/Cryptographic_hash_function
* [RSA and ECC in JavaScript](http://www-cs-students.stanford.edu/~tjw/jsbn/)
    * 包含 SHA1
* [Which symmetric key algorithm does SSL use?](https://stackoverflow.com/questions/6088583/which-symmetric-key-algorithm-does-ssl-use)
    * Symmetric algorithms supported in SSL are DES, 3DES, ARCFOUR, AES, Camellia, RC2, IDEA, SEED, NULL (no encryption).
* [維基百科:RSA加密演算法](https://zh.wikipedia.org/zh-tw/RSA%E5%8A%A0%E5%AF%86%E6%BC%94%E7%AE%97%E6%B3%95)
    * http://www.mathland.idv.tw/life/rsa576.htm
* [維基百科:橢圓曲線密碼學](https://zh.wikipedia.org/wiki/%E6%A4%AD%E5%9C%86%E6%9B%B2%E7%BA%BF%E5%AF%86%E7%A0%81%E5%AD%A6)
    * 橢圓曲線密碼學（英語：Elliptic curve cryptography，縮寫為 ECC）
* [List of random number generators](https://en.wikipedia.org/wiki/List_of_random_number_generators)
    * https://en.wikipedia.org/wiki/Blum_Blum_Shub (x[n+1] = x[n]^2 mod M)
    * https://en.wikipedia.org/wiki/Linear_congruential_generator (x[n+1] = a x[n] + c mod M)
    * https://en.wikipedia.org/wiki/Lehmer_random_number_generator (x[n+1] = a x[n] mod M)
    * https://en.wikipedia.org/wiki/Yao%27s_test (偽隨機數通過此測試者，難以和真的隨機數做區分)

## 區塊鏈

* [比特幣 (Bit Coin) 的運作原理](http://pansci.asia/archives/53571) -- 陳鍾誠
* [A blockchain in 200 lines of code](https://medium.com/@lhartikk/a-blockchain-in-200-lines-of-code-963cc1cc0e54)
    * https://github.com/lhartikk/naivechain
    * https://lhartikk.github.io/
* [Blockchain Demo](https://anders.com/blockchain/)
* https://anders.com/blockchain/
    * https://github.com/anders94/blockchain-demo/

* https://en.wikipedia.org/wiki/List_of_important_publications_in_cryptography

## Number 數論

* http://numbers.github.io/index.html
  * [numbers.js, 面向 node.js 和JavaScript的高級數學庫](http://hant.helplib.com/GitHub/article_93511)

## 大整數

* https://github.com/MikeMcl/decimal.js
* https://github.com/MikeMcl/bignumber.js
* https://github.com/MikeMcl/big.js

## 質數測試

* https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test
* https://github.com/indutny/miller-rabin/blob/master/lib/mr.js
* https://github.com/indutny/primal

## 大數相乘

* [Karatsuba算法](https://zh.wikipedia.org/wiki/Karatsuba%E7%AE%97%E6%B3%95)
* https://gist.github.com/haocong/c2d9b2169d28eb15a94d
* https://stackoverflow.com/questions/28372569/implementing-karatsuba-multiplication-in-javascript
