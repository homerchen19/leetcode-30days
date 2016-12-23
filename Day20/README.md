# [Leetcode-20/30][Sort] #179 Largest Number

## #179 Largest Number

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.
```
#### 題目解答：
```javascript
/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = nums => {
  nums.sort((a, b) => {
    return ('' + a + b) > ('' + b + a) ? -1 : 1;
  });

  const result = nums.join('');

  return result[0] === '0' ? '0' : result;
};
```
#### 題目連結：[179. Largest Number](https://leetcode.com/problems/largest-number/)
#### 解題說明：
今天是第 20 天，終於過了三分之二的日子了！  

這次題目我們來練習一下 `JavaScript` 原生 **[`sort`](http://www.w3schools.com/jsref/jsref_sort.asp)** 的用法～  
根據 **[W3C `array.sort()`](http://www.w3schools.com/jsref/jsref_sort.asp)** 的說明，我們可以傳一個 `compareFunction` 進去，並且以 `compareFunction` 的回傳值是 **負數、0、正數** 來排序整個陣列，  
詳細說明可以點超連結，或是等我們下面解題步驟會再說明一次。  

這題題意是給我們一個裝有正整數的 `Array`，我們要回傳以這些數字拼湊而成的最大數字，因為數字可能會超級大，所以要以字串的方式回傳答案，  
我們就直接用 `JavaScript` 原生的 `Array.sort` 來解決即可～  

#### 解題步驟：
- 步驟 1.  
因為要拼出最大的數字，我們要對這些數字進行排序，  
但是，直接比較數字大小是行不通的！  
例如：**12 和 121**，  
雖然 **121 > 12**，但是 **12121 > 12112**，  
所以我們定義排序的規則是，如果 **AB > BA**，那我們設定 **A < B**，  
也就是最後拼接起來時是 **A 放在 B 之前**。  

  這段我們就以 `compareFunction` 來實作，  
可能看不懂的地方是回傳 -1 或 1 那邊，  
我們先知道 `compareFunction` 的規則是：**回傳負數 = 小於**、**回傳正數 = 大於**、**回傳 0 = 等於**，  
所以我們要讓 **A < B** 的話，也就是 **A 放在 B 之前**，我們得回傳 **負數 -1**，這樣就可以啦～  

  以這種規則下去排序 `Array`，最後的答案就是我們要的了，  
然後我們把陣列 `nums` 給 `join('')` 起來成一個字串，  
最後注意題目可能會給 `[0,0]` 這種測資進來，所以我們要確保開頭不能是 0，如果是的話就回傳 0，否則正常回傳 `result` 即可！  
完成！  

```javascript
nums.sort((a, b) => {
  return ('' + a + b) > ('' + b + a) ? -1 : 1;
});

const result = nums.join('');

return result[0] === '0' ? '0' : result;
```
