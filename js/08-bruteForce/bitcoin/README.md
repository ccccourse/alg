# bitcoin

* 區塊鏈的原理
    * https://github.com/anders94/blockchain-demo
    * https://andersbrownworth.com/blockchain/

* [《精通比特幣（第二版）-- 區塊鏈程式設計》 中文版](https://github.com/doggy8088/bitcoin_book_2nd)
* [從0開始架構區塊鏈](https://ithelp.ithome.com.tw/users/20119982/ironman/2255?sc=iThelpR)
* [Smart Contract 開發 - 使用 Solidity](https://ithelp.ithome.com.tw/users/20092025/ironman/1759)

## mining.js

```
PS D:\ccc\ccc109a\se\deno\alg\08-bruteForce\bitcoin> deno run mining.js
Check file:///D:/ccc/ccc109a/se/deno/alg/08-bruteForce/bitcoin/mining.js
{
  record: { nonce: 169321, data: "john => mary : $2.7; george => john : $1.3" },
  hash: "000008fe6609d98812d5371c271640c2c3e9658f425d0cb4bc1eb5d7b1f653d1"
}
```

改為 random 版之後

```
PS D:\ccc\ccc109a\se\deno\alg\08-bruteForce\bitcoin> deno run mining.js
Check file:///D:/ccc/ccc109a/se/deno/alg/08-bruteForce/bitcoin/mining.js
{
  record: { nonce: 93863701, data: "john => mary : $2.7; george => john : $1.3" },
  hash: "0000078de98ba0f730a73a729ea6d8f7fbea2afa5d1dc708fd3821099cbd374e"
}
```