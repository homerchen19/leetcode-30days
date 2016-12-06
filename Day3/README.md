# [Leetcode-3/30][String] #214 Shortest Palindrome

## #214 Shortest Palindrome

#### 題目難度：Hard :star::star::star:
#### 題目敘述：
```
Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

For example:

Given "aacecaaa", return "aaacecaaa".

Given "abcd", return "dcbabcd".
```
#### 題目解答：
```javascript
/**
 * @param {string} s
 * @return {string}
 */

const reverseString = s => s.split('').reverse().join('');

const shortestPalindrome = s => {
  const reverseStr = reverseString(s);
  const combineStr = s + '#' + reverseStr;
  const s_length = combineStr.length;
  const next = [];

  for(let i = 0; i < s_length; i++) {
    next.push(0);
  }

  for(let i = 1; i < s_length; i++) {
    let j = next[i - 1];

    while(j > 0 && (combineStr[i] !== combineStr[j])) {
      j = next[j - 1];
    }

    if(combineStr[i] === combineStr[j]) {
      j++;
    }

    next[i] = j;
  }

  return reverseStr.substring(0, s.length - next[s_length - 1]) + s;
};
```
#### 題目連結：[214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
#### 解題說明：
今天是第三天，也是主題 `String` 的最後一篇～  
昨天練習了難度 Medium 的題目，今天當然要再進步一點，  
所以今天寫的是難度 **Hard** 的題目 [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)！  

題目是給一個字串，然後在字串前面**加入字元**，最後把這個字串變成一個**最短回文字串**。  
如範例，`abcd` -> `dcbabcd`，在原本的字串 `abcd` 前面加上 `dbc`，形成以 `a` 為中心的回文字串 **`dcb a bcd`** 這樣。  


這題會用到第一天寫的[反轉字串題](https://github.com/xxhomey19/leetcode-30days/tree/master/Day1)，為什麼呢？  
從上面 **`dcb a bcd`** 可以發現！  
是不是很像 **`dcba`** 跟 **`abcd`** 黏在一起呢！！  
**`dcba`** 跟 **`abcd`** 就剛好是反轉字串欸！！！  

所以呢，這題其實就是考找出 **`dcba` 的後綴** 跟 **`abcd`的前綴**的  
**最長匹配字串（a）**！！  
因為，答案就是.....  
(**`反轉字串`** - **`最長匹配字串`** ) + **`正常字串`** = **`最短回文字串`**   
(**`dcba`** - **`a`** ) + **`abcd`** = **`dcbabcd`**  

至於找前後綴的過程我使用 **KMP演算法**，這個演算法是用來搜尋一個小字串出現在大字串的位置，詳細教學可以參考[這裡](http://www.evanlin.com/about-kmp/)。  

解題詳細步驟將在解題步驟中說明～  

#### 解題步驟：  
- 步驟1.  
寫一個反轉字串的 function，跟第一天的[反轉字串題](https://github.com/xxhomey19/leetcode-30days/tree/master/Day1)一模一樣，如果不熟悉 `JavaScript ES6` 的寫法請參考 [Arrow Function](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。
```javascript
const reverseString = s => s.split('').reverse().join('');
```

- 步驟2.  
我們主要計算的字串是組合過的字串 `combindStr`，等於 **`反轉字串#正常字串`**，中間的 `#` 是為了避免反轉字串跟正常字串混淆，也可以避掉正常字串是空字串的問題，需要注意的是區隔字元必須保證不會出現在正常字串中。  

  最下面的空陣列 `next` 是用來儲存 `KMP演算法` 中的 `next[]`，`next[]`詳細算法可以參考[這裡](http://www.zendei.com/article/7393.html)，`for` loop 把 `next[]` 先塞滿 0。  

```javascript
const reverseStr = reverseString(s);
const combineStr = s + '#' + reverseStr;
const s_length = combineStr.length;
const next = [];

for(let i = 0; i < s_length; i++) {
  next.push(0);
}
```

- 步驟3.  
這步驟即是實作找出 `next[]`，在此不多詳述，看[這裡](http://www.zendei.com/article/7393.html)就非常清楚了～

```javascript
for(let i = 1; i < s_length; i++) {
  let j = next[i - 1];

  while(j > 0 && (combineStr[i] !== combineStr[j])) {
    j = next[j - 1];
  }

  if(combineStr[i] === combineStr[j]) {
    j++;
  }

  next[i] = j;
}
```

- 步驟4.  
最後，在前一步驟算好 `next[]` 後，我們就知道他們的**最長匹配字串**長度了！我們在這用 `JavaScript` 原生的 `substring()` 提取反轉字串中從頭到**最長匹配字串**前的字串，然後再接上正常字串。  
完成！  

```javascript
return reverseStr.substring(0, s.length - next[s_length - 1]) + s;
```
