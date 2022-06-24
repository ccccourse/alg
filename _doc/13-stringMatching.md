# 字串比對法 String Matching 

## 快速字串比對

* [Wikipedia: Knoth-Morris-Prett 比對法](https://zh.wikipedia.org/wiki/%E5%85%8B%E5%8A%AA%E6%96%AF-%E8%8E%AB%E9%87%8C%E6%96%AF-%E6%99%AE%E6%8B%89%E7%89%B9%E7%AE%97%E6%B3%95)

* [吳昇: 一個演算法研究的故事](https://www.facebook.com/photo.php?fbid=2073153376104649&set=a.311944475558890&type=3)
    * [A FAST ALGORITHM FOR MULTI-PATTERN SEARCHING](http://webglimpse.net/pubs/TR94-17.pdf)

### JavaScript 的字串物件

JavaScript 的字串物件本身，就包含了許多常用的字串處理函數，像是大小寫轉換、比對、取代、切割字串等等，而這些函數當中，
有些甚至支援了「正規表達式」，像是 match (比對)、replace (取代)、search (搜尋)、split(分割) 等等。

以下表格列出了 JavaScript 字串物件當中常用的成員與函數之用法。

String 物件的成員與函數

屬性/函數        | 說明                       |            範例 | 結果
----------------|----------------------------|-----------------|--------------------------------------------------------
constructor     | 傳回建構函數                |  "Hello".constructor             |    function String() { [native code] }
length          | 傳回長度                    |  "Hello".length                  |    function String() { [native code] }
prototype       | 傳回原型                    |  "Hello".prototype               |    undefined
charAt()        | 傳回第 i 個字元             |  "Hello".charAt(1)               |    e
charCodeAt()    | 傳回第 i 個字元的 Unicode   |  "Hello".charCodeAt(1)           |    101
concat()        | 連接兩個以上的字串           | "Hello".concat(" World", " !")  |    Hello World !
fromCharCode()  | 將 Unicode 代碼轉為字元      | "Hello".fromCharCode(101, 102)  |    ef
indexOf()       | 傳回子字串的位置             | "Hello".indexOf("el")           |    1
lastIndexOf()   | 傳回子字串的位置 (倒著掃瞄)  | "Hello".lastIndexof("l")        |    3
match()         | 搜尋正規表達式              |  "Hello".match("[aeiou]")       |     2
replace()       | 取代正規表達式              |  "Hello".replace("l", "L")       |    HeLlo
search()        | 搜尋正規表達式              |  "Hello".search("[aeiou]")       |    e
split()         | 分割字串                    |  "Hello".split("e")              |    H,llo
slice()         | 切出字串                    |  "Hello".slice(-3)               |    llo
substr()        | 取出 from 長 len 的子字串   |  "Hello".substr(2,2)             |    ll
substring()     | 取出 from 到 to 的子字串    |  "Hello".substring(2,4)          |    llo
toLowerCase()   | 轉為小寫                    |  "Hello".toLowerCase()           |    hello
toUpperCase()   | 轉為大寫                    |  "Hello".toUpperCase()           |    HELLO
valueOf()       | 傳回原型值                  |  "Hello".valueOf()                |   Hello

程式範例：string.js

```javascript
var s = "Hello";
log = console.log;
log("s = "+s);
log("s.constructor = "+s.constructor);
log("s.length = "+s.length);
log("s.prototype = "+s.prototype);
log("s.charAt(1) = "+s.charAt(1));
log("s.charCodeAt(1) = "+s.charCodeAt(1));
log("s.concat(' World', ' !') = "+s.concat(' World', ' !'));
log("String.fromCharCode(72,69,76,76,79) = "+String.fromCharCode(72,69,76,76,79));
log("s.indexOf('el') = "+s.indexOf('el'));
log("s.lastIndexOf('l') = "+s.lastIndexOf('l'));
log("s.match('[aeiou]') = "+s.match('[aeiou]'));
log("s.replace('l', 'L') = "+s.replace('l', 'L'));
log("s.search('[aeiou]') = "+s.search('[aeiou]'));
log("s.slice(2,4) = "+s.slice(2,4));
log("s.slice(2) = "+s.slice(2));
log("s.slice(-3) = "+s.slice(-3));
log("s.split('e') = "+s.split('e'));
log("s.substr(2,2) = "+s.substr(2,2));
log("s.substring(2,4) = "+s.substr(2,4));
log("s.toLowerCase() = "+s.toLowerCase());
log("s.toUpperCase() = "+s.toUpperCase());
log("s.valueOf() = "+s.valueOf());

```

執行結果

```
D:\code\node>node string.js
s = Hello
s.constructor = function String() { [native code] }
s.length = 5
s.prototype = undefined
s.charAt(1) = e
s.charCodeAt(1) = 101
s.concat(' World', ' !') = Hello World !
String.fromCharCode(72,69,76,76,79) = HELLO
s.indexOf('el') = 1
s.lastIndexOf('l') = 3
s.match('[aeiou]') = e
s.replace('l', 'L') = HeLlo
s.search('[aeiou]') = 1
s.slice(2,4) = ll
s.slice(2) = llo
s.slice(-3) = llo
s.split('e') = H,llo
s.substr(2,2) = ll
s.substring(2,4) = llo
s.toLowerCase() = hello
s.toUpperCase() = HELLO
s.valueOf() = Hello

```

## 正規表達式

在以上的範例中，我們使用了簡易的正規表達式，像是 s.match('[aeiou]') 中的 [aeiou] ，代表比對 aeiou 中的何一個字。

對於沒學過正規表達式的人來說，常常會覺得「正規表達式」就像本天書一樣，但事實上正規表達式並不會太難看懂！以下先讓我們
介紹一下正規表達式的語法，然後再用 Node.js + JavaScript 進行測試。

Regular Expression 的「Regular」一般被譯為「正則」、「正規」、「常規」。此處的「Regular」即是「規則」、「規律」的意思，
Regular Expression 即「描述某種規則的表達式」之意，有時也稱為 Regular Grammar。

Perl 最早是引入正規表達式的語言，因此早期的 CGI 程式常使用 Perl 撰寫，後來很多語言都陸續引入了正規表達式，像是 
Python, Ruby, JavaScript 等，這些語言讓正規表達式成為標準語法的一部分，因此使用起來非常方便。

也有一些語言以函式庫的形式納入正規表達式，但是沒有內建在語法當中，像是 C#, Java, C 等等，在這類的語言當中，使用
正規表達式會稍微繁瑣一些。

假如我們要用正規表達式描述整數數字，那麼，可以用 `[0123456789]+` 這個表達式，其中的中括號 `[ 與 ]` 會框住一群
字元，用來代表字元群，加號 + 所代表的是重複  1 次或以上，因此，該表達式就可以描述像 3702451 這樣的數字。
然而，在正則表達式中，為了更方便撰寫，於是允許用 [0-9]+    這樣的式子表達同樣的概念，其中的 0-9 其實就
代表了  0123456789  等字元，這是一種簡便的縮寫法。甚至，可以再度縮短後以 \\d+ 代表，其中的 \\d 就代表
數字所成的字元集合。

利用範例學習是理解正規表達式的有效方法，以下表格就顯示了一些具有代表性的正規表達式範例。

語法                |    正規表達式                      | 範例
--------------------|-----------------------------------|------------------------
整數                 |   [0-9]+                         |   3704
有小數點的實數        |  [0-9]+\.[0-9]+                  |  7.93
英文詞彙             |   [A-Za-z]+                       |  Code
變數名稱             |   [A-Za-z_][A-Za-z0-9_]*          |  _counter
Email               |    [a-zA-Z0-9_]+@[a-zA-Z0-9\._]+   |  ccc@kmit.edu.tw
URL                 |    http://[a-zA-Z0-9\./_]+         |  http://ccc.kmit.edu.tw/mybook/

為了協助讀者理解這些範例，我們有必要對範例中的一些正規表達式符號進行說明。

在實數的範例中，使用 \. 代表小數點符號 .，不熟悉正規表達式的讀者一定覺得奇怪，為何要加上斜線符號 \\ 呢？
這是因為在正則表達式當中，有許多符號具有特殊意義，例如點符號 . 是用來表示任意字元的，星號  *  是代表出現 0 次以上，
加號 + 代表一次或以上，在正則表達式當中，有許多這類的特殊字元，因此用斜線 \\ 代表特殊符號辨識的跳脫字元 
(就像 C 語言當中 printf 函數內的用途一樣)。因此、當我們看到 \\ 符號時，必須繼續向後看，才能知道其所代表的意義。

為了方便讀者查閱並更全面的瞭解正規表達式，我們在下列的表格中更詳細的列出了正規表達式的符號與其用法：

字元            | 描述
----------------|---------------------------------------------------------------
^               | 比對字串開頭 (開始位置)。
$               | 比對字串結尾 (結束位置)。
`*`             | 零次或以上
`+`               | 一次或以上
?               | 零次或一次 (也可能指「非貪婪模式」，必須視上下文而定)
{n}             | n 次。
{n,}            | n 次或以上
{n,m}           | n 到 m 次
.               | 比對除了 "\n" 以外字元
(?:pattern)    | 比對 pattern 樣式 
(?=pattern)    | 正向肯定預查，例如 "Windows (?=95|98|NT|2000)" 可比對到 "Windows 2000" 中的 "Windows"，但不能比對 Windows XP 中的 Windows。
(?!pattern)    | 正向否定預查，例如 "Windows(?!95|98|NT|2000)" 能比對 "Windows XP"中的 "Windows"，但不能比對 "Windows 2000" 中    的"Windows"。
(?<=pattern)   | 反向肯定預查，與正向肯定預查類似，只是方向相反。
(?<!pattern)   | 反向否定預查，與正向否定預查類似，只是方向相反。
x|y            | 比對 x 或 y。
[xyz]          | 包含 xyz 等字元。
[^xyz]         | 不包含 xyz 等字元。
[a-z]          | 字元範圍 a-z。
[^a-z]         | 不包含字元範圍 a-z。
\\b            | 比對「英文詞彙」的邊界。例如，"John\b"可以比對 John，但不能比對 Johnson。
\\B            | 比對非「英文詞彙」的邊界。例如，"John\B"可以比對 Johnson，但不能比對 John。
\\cx           | 比對由 x 指明的控制字元。例如，\cM 可比對 Control-M。
\\d            | 比對數字符號。等價於 [0-9]。
\\D            | 比對非數字符號。等價於 [^0-9]。
\\f            | 比對換頁符號。等價於 `\x0c 和 \cL`。
\\n            | 比對換行符號。等價於 `\x0a 和 \cJ`。
\\r            | 比對回車符號。等價於 `\x0d 和 \cM`。
\\s            | 比對任何空白字元，包括空格、定位字元、換頁符等等。等價於 `[\f\n\r\t\v]`。
\\S            | 比對任何非空白字元。等價於 `[^\f\n\r\t\v]`。
\\t            | 比對定位字元。等價於 `\x09` 和 `\cI`。
\\v            | 比對垂直定位字元。等價於 `\x0b` 和 `\cK`。
\\w            | 比對「英文、數字或底線」。等價於 `[A-Za-z0-9_]`。
\\W            | 比對非「英文、數字或底線」的字元。等價於 `[^A-Za-z0-9_]`。
\\xnum         | 比對 16 進位指定的字元碼。例如，`\x42` 比對 "B"。
\\onum         | 比對 8 進位指定的字元碼。
\\unum         | 比對 unicode，其中 n 是一個用四個 16 進位數位表示的 Unicode 字元。
\\num          | 重複比對 num 次。例如，`(.)\2` 比對 3 個連續的相同字元。
`pat1|pat2`    | 比對樣式 pat1 或 pat2，兩者都要的比對方式。

### 程式範例 -- Node.js 的正規表達式

現在、就讓我們用幾個 Node.js 程式，來示範 JavaScript 的正規表達式之用法。


#### 範例 1 : 比對、取代與分割

在以下範例中，我們示範了如何使用字串物件內建的 replace, split, match, search 等函數，
透過正規表達式進行字串「取代、分割、比對、搜尋」等功能。

檔案：regexp1.js

```javascript
var log = console.log;

text = "name=ccc age=43 email=[ccckmit@gmail.com,ccc@nqu.edu.tw] website=http://ccckmit.wikidot.com/ job=teacher";
log("===text.replace(\d+, <number>)===\n%j\n", text.replace(/\d+/, "<number>"));    // 取代數字為 <number>
log("===text.split(\s+)===\n%j\n", text.split(/\s+/));                              // 用空白字元分割字串
log("===text.match(\d+)===\n%j\n", text.match(/\d+/));                              // 比對取得數字
log("===text.search(\d+)===\n%j\n", text.search(/\d+/));                            // 比對取得數字的位置
log("===text.replace(/http:\/\/[a-zA-Z0-9\.\/_]+/, <url>)===\n%j\n",                // 取代網址為 <url>
    text.replace(/http:\/\/[a-zA-Z0-9\.\/_]+/, "<url>"));
log("===text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/, <email>)===\n%j\n",           // 取代郵件位址為 <email>，只取代一次
    text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/, "<email>"));
log("===text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/g, <email>)===\n%j\n",          // 取代所有郵件位址為 <email>。
    text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/g, "<email>"));

```

執行結果：

```
D:\Dropbox\Public\pmag\201307\code>node regexp1
===text.replace(d+, <number>)===
"name=ccc age=<number> email=[ccckmit@gmail.com,ccc@nqu.edu.tw] website=http://c
cckmit.wikidot.com/ job=teacher"

===text.split(s+)===
["name=ccc","age=43","email=[ccckmit@gmail.com,ccc@nqu.edu.tw]","website=http://
ccckmit.wikidot.com/","job=teacher"]

===text.match(d+)===
["43"]

===text.search(d+)===
13

===text.replace(/http://[a-zA-Z0-9./_]+/, <url>)===
"name=ccc age=43 email=[ccckmit@gmail.com,ccc@nqu.edu.tw] website=<url> job=teac
her"

===text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9._]+/, <email>)===
"name=ccc age=43 email=[<email>,ccc@nqu.edu.tw] website=http://ccckmit.wikidot.c
om/ job=teacher"

===text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9._]+/g, <email>)===
"name=ccc age=43 email=[<email>,<email>] website=http://ccckmit.wikidot.com/ job
=teacher"
```

#### 範例 2 : 使用正規表達式物件比對字串

當然、我們也可以反過來用正規表達式去比對字串，這種方法可以很方便的用來取得各個比對的內容，因此很適合
用來做欄位取出的動作，以下是一個用正規表達式取出「姓名 name、年齡 age、出生年 year /月 month /日 day」
等欄位的程式。

```javascript
var re = new RegExp("\\d+", "gi");
var str = "name:john age:20 birthday:1990/8/31";

var m = null;
while (m = re.exec(str))
    console.log(m.toString());
    
var p = parse(str);
console.log("p.name="+p.name+" age="+p.age+" year="+p.year+" month="+p.month+" day="+p.day);

function parse(data) {
    var e=new RegExp("name:(\\w+) age:(\\d+) birthday:(\\d+)/(\\d+)/(\\d+)", "gi");

    if (data.match(e)) {
        return  {exp: RegExp['$&'],
                name: RegExp.$1,
                age:RegExp.$2,
                year:RegExp.$3,
                month:RegExp.$4,
                day:RegExp.$5};
    }
    else {
        return null;
    }
}

String.prototype.trim = function() { 
  return this.replace(/(^\s*)|(\s*$)/g, ""); 
}

console.log("' abc '.trim()='"+' abc '.trim()+"'");

```

另外在程式的最後，我們透過改寫 String 物件的原型 prototype，可以為字串類別插入原本不具備的函數 (trim)，
以便去除字串前後的空白。這種方式充分展現了 JavaScript 這類動態語言的彈性之處。

以下是該範例的執行結果：

```
D:\Dropbox\Public\pmag\201307\code>node regexp2
20
1990
8
31
p.name=john age=20 year=1990 month=8 day=31
' abc '.trim()='abc'
```

#### 範例 3 : 製作一個簡易的程式語言詞彙掃描器 Lexer (或稱 Scanner)

如果利用正規表達式，很多工作就可以輕易的完成。舉例而言，在編譯器的設計當中，詞彙掃描器 Lexer 是一個最基礎的工作，
掃描完成後才能進行剖析 Parsing 的動作。如果我們使用「正規表達式」來處理這項工作，那麼只要一個 match 函數就可以完成了，
如以下程式所示。


檔案：scan1.js

```javascript
text = "i=3; /* hello \r\n world! */\r\n add=function(a,b) { return a+b; }";                     // 程式字串
re = /(\/\*[\s\S]*?\*\/)|(\/\/[^\r\n])|(".*?")|(\d+(\.\d*)?)|([a-zA-Z]\w*)|(\r?\n)|(\s+)|(.)/gm; // g 代表全域，m 代表多行的比對方式。
console.log("text.match(re)=%j", text.match(re));   // 印出比對後得到的陣列。

```

執行結果：

```
D:\Dropbox\Public\pmag\201307\code>node scan1
text.match(re)=["i","=","3",";"," ","/* hello \r\n world! */","\r\n"," ","add","
=","function","(","a",",","b",")"," ","{"," ","return"," ","a","+","b",";"," ","
}"]
```

另外、輸入字串當然也可以從檔案讀取，如以下程式所示：

檔案：scan2.js

```javascript
var fs = require('fs'); /* 引用檔案物件 */
var text = fs.readFileSync(process.argv[2], "utf8"); /* 讀取檔案 */
re = /(\/\*[\s\S]*?\*\/)|(\/\/[^\r\n])|(".*?")|(\d+(\.\d*)?)|([a-zA-Z]\w*)|(\r?\n)|(\s+)|(.)/gm; /* g 代表全域，m 代表多行的比對方式。*/
console.log("text.match(re)=%j", text.match(re));   /* 印出比對後得到的陣列。*/

```

執行結果

```
D:\Dropbox\Public\pmag\201307\code>node scan2 scan2.js
text.match(re)=["var"," ","fs"," ","="," ","require","(","'","fs","'",")",";","
","/* 引用檔案物件 */","\r\n","var"," ","text"," ","="," ","fs",".","readFileSyn
c","(","process",".","argv","[","2","]",","," ","\"utf8\"",")",";"," ","/* 讀取
檔案 */","\r\n","re"," ","="," ","/","(","\\","/","\\","*","[","\\","s","\\","S"
,"]","*","?","\\","*","\\","/",")","|","(","\\","/","\\","/","[","^","\\","r","\
\","n","]",")","|","(","\".*?\"",")","|","(","\\","d","+","(","\\",".","\\","d",
"*",")","?",")","|","(","[","a","-","zA","-","Z","]","\\","w","*",")","|","(","\
\","r","?","\\","n",")","|","(","\\","s","+",")","|","(",".",")","/","gm",";","
","/* g 代表全域，m 代表多行的比對方式。*/","\r\n","console",".","log","(","\"te
xt.match(re)=%j\"",","," ","text",".","match","(","re",")",")",";","   ","/* 印
出比對後得到的陣列。*/","\r\n"]
```

當然，如果要判斷所掃描的每個詞彙是何種型態、並且紀錄行號的話，那麼就會稍微複雜一些，如以下程式所示：

檔案：scan3.js

```javascript
var log = console.log;
text = "i=3; /* hello \r\n world! */\r\n add=function(a,b) { return a+b; }";

// 本來應該用 .*? 來比對 /*...*/ 註解的，但 javascript 的 . 並不包含 \n, 因此用 \s\S 代替 . 就可以了。
// 加上後置問號 *?, +? 代表非貪婪式比對 (non greedy), m 代表多行比對模式 (multiline)
re = new RegExp(/(\/\*[\s\S]*?\*\/)|(\/\/[^\r\n])|(".*?")|(\d+(\.\d*)?)|([a-zA-Z]\w*)|(\r?\n)|(\s+)|(.)/gm);
var types = [ "", "blockcomment", "linecomment", "string", "int", "float", "id", "br", "space", "op" ];
var tokens = [];
var m;
var lines = 1;
while((m = re.exec(text)) !== null) {
  var token = m[0], type;
  for (i=1; i<=8; i++) { 
    if (m[i] !== undefined)
      type = types[i];
  }
  tokens.push({ "token":token, "type":type, "lines":lines });
  log("token="+token+" type="+type+" lines="+lines);
  lines += token.split(/\n/).length-1;
}
```

執行結果

```
D:\Dropbox\Public\pmag\201307\code>node scan3
token=i type=id lines=1
token== type=id lines=1
token=3 type=int lines=1
token=; type=int lines=1
token=  type=space lines=1
token=/* hello
 world! */ type=blockcomment lines=1
token=
 type=br lines=2
token=  type=space lines=3
token=add type=id lines=3
token== type=id lines=3
token=function type=id lines=3
token=( type=id lines=3
token=a type=id lines=3
token=, type=id lines=3
token=b type=id lines=3
token=) type=id lines=3
token=  type=space lines=3
token={ type=space lines=3
token=  type=space lines=3
token=return type=id lines=3
token=  type=space lines=3
token=a type=id lines=3
token=+ type=id lines=3
token=b type=id lines=3
token=; type=id lines=3
token=  type=space lines=3
token=} type=space lines=3

```

現在、您應該已經瞭解如何在 JavaScript 當中使用正規表達式了，當您有任何字串處理的需求時，請記得正規表達式永遠是你的好朋友，
它可以讓原本要寫上數十行甚至數百行的程式，輕鬆的用一兩行就搞定了，這個工具大大的提升了程式人的生產力，對經常進行字串處理
的程式人而言，學會「正規表達式」絕對可以讓你感覺到「事半功倍」啊！

### 參考文獻
* [正規表示式:維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F)