# 演算法的複雜度分析

演算法就是抽象化的程式碼後，通常比較不考慮《實作細節》，但是對於運作過程卻要很仔細的分析清楚。

演算法在意的重點，除了正確性之外，主要就是《速度問題》，而一個演算法的執行速度，我們通常用其輸入 input 的長度 n 來做衡量，舉例而言：

1. 在一個未排序的陣列中從頭到尾尋找一個元素是否存在，通常需要 O(n) 的時間。
2. 在一個已排序的陣列中用二分搜尋法找到一個元素，通常需要 O(log n) 的時間。
3. 泡沫排序法需要花費 O(n^2) 的時間
4. 合併排序法需要花費 O(n log n) 的時間

## 複雜度的衡量 -- Big O

* https://www.bigocheatsheet.com/
* https://cooervo.github.io/Algorithms-DataStructures-BigONotation/index.html
* https://en.wikipedia.org/wiki/Best,_worst_and_average_case
* https://en.wikipedia.org/wiki/Search_data_structure#Asymptotic_amortized_worst-case_analysis
* https://en.wikipedia.org/wiki/Sorting_algorithm#Comparison_of_algorithms
* [Complexity：Asymptotic Notation(漸進符號)](http://alrightchiu.github.io/SecondRound/complexityasymptotic-notationjian-jin-fu-hao.html)

## BigO

演算法的複雜度通常以 Big O 函數來衡量，Big O 是一個只考慮函數成長等級，但是不考慮常數項的概念。

以下是一些程式的複雜度範例，其中的 n 在未指定的情況下通常是指《輸入資料長度》 (例如陣列長度)。

* O(1) -- [distance.js](bigO/distance.js)
* O(log n) -- [binSearch.js](06-divideConquer/binSearch.js)
* O(n) -- [lsearch](bigO/lsearch.js)
* O(n log n)-- [binSearch.js](06-divideConquer/mergeSort/)
* O(n^2) -- [bubbleSort.js](bigO/bubbleSort.js)
* O(n^3) -- [matrixMul.js](bigO/matrixMul.js)
    * 這裡的 n 是指矩陣的高或寬
    * 更精確的寫法應該是 m * n * p
* O(2^n) -- [power2n.js](bigO/power2n.js), [fibonacci.js](01-tableLookup/fibonacci.js), [sat.js](16-npcomplete/SAT/sat.js)

## 基本資料結構的複雜度

* https://www.bigocheatsheet.com/

* Array : 
* LinkedList : 
* HashTable : 
* BinaryTree : => 紅黑樹
* Trie : => PatriciaTrie

## 避免過高的複雜度

當複雜度到達或超過 O(2^n) 時，只要 n 稍大一點，基本上程式就會跑到天荒地老都跑不出來。

(其實只要達到 O(n^4) 以上，而且 n > 10000 通常就會跑到天荒地老都跑不出來了)

## 有些問題無法完全正確解答

例如圖靈提出的停止問題，就無法完全正確解答！

關於停止問題的詳細描述，請參考下列網頁。

* [人工智慧/06-邏輯推論/A2 計算理論](../人工智慧/06-邏輯推論/A2-計算理論)


