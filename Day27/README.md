# [Leetcode-27/30][Bit Manipulation] #371 Sum of Two Integers

## #371 Sum of Two Integers

#### 題目難度：Easy :star:
#### 題目敘述：
```
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.


```
#### 題目解答：
```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  if(a === 0) return b;
  if(b === 0) return a;

  let carry = 0;

  while(b !== 0) {
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
};
```
#### 題目連結：[371. Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)
#### 解題說明：
喔喔喔快要跨年了沒時間寫太難的啦，所以今天就來寫個有趣又不難的 [371. Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)，難度只有 **Easy** 喔！  

題目會給我們兩個數字，要我們把它們加起來，但不能使用 `+`, `-` 符號，  
很明顯就是要我們把數字換成位元去計算啦～  
接下來會有詳細的解題說明。  

#### 解題步驟：
- 步驟 1  
好的我們直接上個計算流程大家就懂啦～  
1. 假設輸入的數字為 `a = 3(0011)` 和 `b = 9(1001)`
2. 第一輪開始，相加先考慮進位 `carry = a & b = (0011) ^ (1001) = 0001` 進位值
4. 兩數字相加不考慮進位 `a = a ^ b = (0011) ^ (1001) = 1010`
4. `b = 0001 << 1 = 0010` 進位
5. 第一輪後 `a = 10(1010), b = 2(0010), carry = 1(0001)`
6. 第二輪開始，先考慮進位 `carry = a & b = (1010) ^ (0010) = 0010` 進位值
7. 相加不考慮進位 `a = a ^ b = (1010) ^ (0010) = 1000`
8. `b = 0010 << 1 = 0100` 進位
9. 第二輪後 `a = 8(1000), b = 4(0010), carry = 2(0010)`
10. 第三輪開始，先考慮進位 `carry = a & b = (1010) ^ (0010) = 0000` 進位值
11. 相加不考慮進位 `a = a ^ b = (1000) ^ (0100) = 1100`
12. `b = 0000 << 1 = 0`
13. `b = 0`，相加完成，`a = 1100 = 12`

進位用 `&`，相加可以用 `^` 來做，  
完成！  

```javascript
const getSum = (a, b) => {
  if(a === 0) return b;
  if(b === 0) return a;

  let carry = 0;

  while(b !== 0) {
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
};
```  
