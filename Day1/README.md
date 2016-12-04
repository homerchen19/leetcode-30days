## 前言
相信所有寫程式的人在面試前，總是在揣測在白板題會被問到什麼問題，而我們最常聽到的準備方式就是“**刷  [LeetCode][1]** ”。  
[LeetCode][1] 上有數百個可能是面試官問你的題目，我把它想像成考學測或指考前的衝刺題庫，可以在 [LeetCode][1] 上練習、考驗程式能力，經過考前一番準備後，才能在正式的面試時想出解答。  

我目前是大學應屆畢業生，專長是用 `JavaScript` 寫前後端，希望藉由這 30 天的 [LeetCode][1] 文章，當作給自己的挑戰，練習平常開發很少使用到的演算法、資結問題，也會同時發佈於我的 [Github repo](https://github.com/xxhomey19/leetcode-30days) ，歡迎大家提出意見或指導，喜歡的話也可以不吝給顆星星～  


## 主題
從 [LeetCode][1] 中選出 **10** 種常見的演算法與資料結構，  
我將在每一個主題中選出 **3** 題相關題目，總共 **30** 題，  
並在接下來 **30** 天中一天實作一題和講解如何解題，所有題目皆使用`Javascript(ES6)`撰寫。  

#### 以下為 10 個主題  
1. String  
2. Array  
3. Matrix  
4. Linked List  
5. Tree  
6. Graph  
7. Sorting  
8. Dynamic Programming  
9. Bit Manipulation  
10. Combinations and Permutations  


ref:  
[Top 10 Algorithms for Coding Interview](http://www.programcreek.com/2012/11/top-10-algorithms-for-coding-interview/)  



## #344 Reverse String

#### 題目難度：Easy
#### 題目敘述：
```
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
```
#### 題目解答：
```javascript
/**
 * @param {string} s
 * @return {string}
 */
const reverseString = s => {
  if(!s) {
    return s;
  }

  return s.split('').reverse().join('');
};
```
#### 題目連結：[344. Reverse String](https://leetcode.com/problems/reverse-string/)
#### 解題說明：
今天第一天先來個很簡單，但卻在面試時真實被問過的問題。  
這題是屬於第一個主題 **String** 的範圍，是個運用 `Javascript` 原生 `Method` 就能解決的題目，我用到了[`split()`](http://www.w3schools.com/jsref/jsref_split.asp)、[`reverse()`](http://www.w3schools.com/jsref/jsref_reverse.asp) 跟 [`join()`](http://www.w3schools.com/jsref/jsref_join.asp)。  
#### 解題步驟：
- 步驟 1.  
判斷字串是否為空，如果是的話就回傳原本的空字串回去  
```javascript
if(!s) {
  return s;
}
```  

- 步驟 2.  
假設輸入的字串是 `"Hello"`，  
先切割字串成陣列 `"Hello" -> [H,e,l,l,o]`，[`split()`](http://www.w3schools.com/jsref/jsref_split.asp) 參數帶入空字串代表**切割每個字元**，  
陣列反轉 `[H,e,l,l,o] -> [o,l,l,e,H]`，  
陣列組裝成字串 `[o,l,l,e,H] -> "olleH"`，[`join()`](http://www.w3schools.com/jsref/jsref_join.asp) 參數帶入空字串代表**以空字串連接陣列裡每個字串**，就是無縫接軌的意思啊～  
完成！  

```javascript
return s.split('').reverse().join('');
```

[1]: https://leetcode.com/
