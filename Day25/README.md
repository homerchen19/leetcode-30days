# [Leetcode-25/30][Bit Manipulation] #405 Convert a Number to Hexadecimal

## #405 Convert a Number to Hexadecimal

#### 題目難度：Easy :star:
#### 題目敘述：
```
Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

Note:

All letters in hexadecimal (a-f) must be in lowercase.
The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.

Example 1:

Input:
26

Output:
"1a"

Example 2:

Input:
-1

Output:
"ffffffff"
```
#### 題目解答：
```javascript
/**
 * @param {number} num
 * @return {string}
 */
const numToHex = num => {
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let ans = "";

  while(num) {
    ans += arr[num & 15];
    num = num >>> 4;
  }

  return ans;
};

const toHex = num => {
  if(num === 0) {
    return "0";
  } else {
    return numToHex(num);
  }
};
```
#### 題目連結：[405. Convert a Number to Hexadecimal](https://leetcode.com/problems/convert-a-number-to-hexadecimal/)
#### 解題說明：
第 25 天！今天進入新的主題 `位元操作 Bit Manipulation`～  
這主題就讓我們來玩一下 `JavaScript` 上的 [`Bitwise operators`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)，我對這些 `operators` 比較不熟悉，所以我們先從難度 Easy 的 [405. Convert a Number to Hexadecimal](https://leetcode.com/problems/convert-a-number-to-hexadecimal/) 開始這主題吧～  

這題題意就跟題目一樣，**將一個整數轉化成十六進位**，這題會用到兩個 [`Bitwise operators`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)，[**`& (Bitwise AND)`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND) 跟 [**`>>> (Zero-fill right shift)`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#>>>_(Zero-fill_right_shift))，  
詳細用法我們下面再說明。  

#### 解題步驟：
- 步驟 1.  
先初步判斷 `num` 是否為 `0`，如果不是的話，把 `num` 傳進去我們主要運算的地方 `numToHex`。  

```javascript
const toHex = num => {
  if(num === 0) {
    return "0";
  } else {
    return numToHex(num);
  }
};
```  
- 步驟 2.  
先宣告我們需要的字元陣列 `arr`，和初始化 `ans`，  

  接著，進入我們主要計算的 `while` loop，  
我們先看 `num & 15` 這行，當用到 [**`& (Bitwise AND)`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND) 時，兩個數字會被轉成 32 bit 二進位去進行 **`a AND b`** 的操作，然後再將結果（二進位）轉回數字（十進位），  
我們之所以要 `num & 15` 是因為 `15` 轉成二進位後等於 `00000000000000000000000000001111`，所以我們用 `num` 去 `AND` 他就能找出 `num / 16` 的餘數，想看 [**`& (Bitwise AND)`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND) 的詳細內容請直接點他～  

  最後 `num = num >>> 4`，[**`>>> (Zero-fill right shift)`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#>>>_(Zero-fill_right_shift)) 是將這個數字的 32 bit 二進位往右移幾個位置並在最左邊補上 `0`，計算完後再轉回數字（十進位），  
  所以我們 `num >>> 4` 就是將 `num` 的 32 bit 二進位往右移四個位置，等同於除以 16 的效果，  

  基本上做到這裡就完成了，`while` loop 會在 `num === 0` 時跳出，最後回傳 `ans` 即可，  
  完成！  

```javascript
const numToHex = num => {
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let ans = "";

  while(num) {
    ans += arr[num & 15];
    num = num >>> 4;
  }

  return ans;
};
```
