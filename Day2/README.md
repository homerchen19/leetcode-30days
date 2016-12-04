# [LeetCode-2/30][String] #3 Longest Substring Without Repeating Characters

## #3 Longest Substring Without Repeating Characters

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```
#### 題目解答：
```javascript
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let maxLength = 0, count = 0;
  let charSet = new Set();
  let leftBound = 0, rightBound = 0;

  if(!s) {
    return maxLength;
  }

  while (rightBound < s.length) {
    const char = s[rightBound];

    if(!charSet.has(char)) {
      charSet.add(char);
      count++;

      if(count > maxLength) {
        maxLength = count;
      }
    } else {
      while(s[leftBound] !== s[rightBound]) {
        charSet.delete(s[leftBound]);
        leftBound++;
        count--;
      }

      leftBound++
    }

    rightBound++;
  }

  return maxLength;
};
```
#### 題目連結：[3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
#### 解題說明：
第二天的主題依然是 **String**，今天選擇的題目比昨天還難一些，難度屬於 Medium  
題目要求是在一個 String 中找出**沒有重複字母的最長 Substring**，並回傳這個 Substring 的長度，  
題目關鍵點是：  
1. 最長 Substring 長度 => **找 Substring 的起點到終點的長度**  
2. 不重複 => **用 loop 檢查是否有重複**  

我使用 **`Sliding Window`** 的方法來解決第一個關鍵點，  
然後利用 `JavaScript ES6` 提供的 **[`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)** 這個資料結構特性（**不重複集合**），來解決第二個關鍵點，我會在下面的解題步驟中詳細說明使用狀況～  
#### 解題步驟：
- 步驟 1.  
宣告需要的變數，  
`maxLength` 是最後的答案，`count` 是目前 Substring 的長度，  
`charSet` 是一個 [`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 物件，用來判斷遇到的字元有沒有包含在目前的 Substring 中，  
`leftBound` 跟 `rightBound` 當做 `Sliding Window` 滑動窗戶的左右邊框，也就是目前 Substring 的起點和終點～
```javascript
let maxLength = 0, count = 0;
let charSet = new Set();
let leftBound = 0, rightBound = 0;
```  

- 步驟 2.  
最外面的 `while` loop，是判斷如果 `rightBound` 右邊框已經頂到字串的最後一個字元，就代表我們把整個字串都計算完了，  
`char` 代表每次遇到的字元，
`rightBound` 右邊框在每次計算完後都往右移動一格。
```javascript
while (rightBound < s.length) {
  const char = s[rightBound];
  ...


  rightBound++;
}
```

- 步驟 3.  
第一個 `if` case 是判斷遇到的字元**沒有在目前的 Substring 中**，使用 **`has()`**  
首先，既然是不重複地出現在目前 Substring 中，我就先把它加進去 `Set` 裡面，使用 **`add()`**  

  接著把 Substring 的長度 `count` +1，  
最後，如果 `count` 比答案 `maxLength` 大就覆蓋 `maxLength`。
```javascript
if(!charSet.has(char)) {
  charSet.add(char);
  count++;

  if(count > maxLength) {
    maxLength = count;
  }
}
```

- 步驟 4.  
這步驟是最重要的一步，要仔細看啊！  

  第二個 `else` case 是當遇到的字元**有出現在目前的 Substring 中**，  
首先，因為字元重複地出現在目前 Substring 中，我使用 **`delete()`**，  
**踢掉 Substring 中，所有前一個重複的字元之前的字元**，  

  接著，**把 `leftBound` 左邊框往右移一格**，因為滑動窗戶中不能有重複字元，所以要把左邊框往中間移動，  
並且把目前的 Substring 的長度 `count` -1，  

  **這個 `while` loop 是本題的精髓**，想像在滑動窗戶邊框的動作就是在擷取最長的不重複 Substring，發揮想像力會覺得這題很動感ＸＤ  

  最後，`leftBound++` 是因為前面 `while` loop **只掃到重複字元的前一個字元**，當然重複的那個也不能包含在窗戶內，所以要再把左邊框往內移動一格。

  完成！
```javascript
else {
  while(s[leftBound] !== s[rightBound]) {
    charSet.delete(s[leftBound]);
    leftBound++;
    count--;
  }

  leftBound++
}
```
