# [Leetcode-21/30][Sort] #274 H-Index

## #274 H-Index

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.

Note: If there are several possible values for h, the maximum one is taken as the h-index.
```
#### 題目解答：
```javascript
/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = citations => {
  const len = citations.length;

  citations.sort((a, b) => {
    return a > b ? -1 : 1;
  });

  for(let i = 0; i < len; i++) {
    if (citations[i] <= i) {
      return i;
    }
  }

  return len;
};
```
#### 題目連結：[274. H-Index](https://leetcode.com/problems/h-index/)
#### 解題說明：
今天是第 21 天， `Sort` 的最後一篇啦～  

這次題目我們一樣用 `JavaScript` 原生 **[`sort`](http://www.w3schools.com/jsref/jsref_sort.asp)** 就可以解囉，真的很方便啊，  
[昨天](https://github.com/xxhomey19/leetcode-30days/tree/master/Day20)已經有解釋過 `Array.sort()` 的使用方法，所以今天就不詳述了，忘記的人可以回去看一下～  

題目的題意是給我們一個陣列，裡面的內容是每篇論文被引用的次數，然後要我們找出 **h-index**，  
至於這是什麼呢，題目給的定義是，**有 N 篇論文至少被引用 N 次，那 h-index 就是 N，**  
好的其實這題超簡單，我們照著他給的定義去寫就可以囉～  

#### 解題步驟：
- 步驟 1.  
這題一樣一個步驟就解決了～  
首先，**h-index** 最大的數字是陣列本身，**因為最多 N 篇論文可能都至少被引用 N 次**，所以我們一開始先宣告 `len` 是陣列的長度，  

  接著，我們將 `citations` 從大到小排序，詳細的 `compareFunction` 使用方法可以參閱[昨天的文章](https://github.com/xxhomey19/leetcode-30days/tree/master/Day20)，  

  最後呢，我們按照定義，**有 N 篇論文至少被引用 N 次**，寫一個 `for` loop，一個一個歷遍 `citations`，如果第 `i` 篇論文的被引用次數小於等於 `i` 次，就代表 **有 i 篇論文的被引用次數至少是 i 次**，這樣就找到 h-index 了！  
  完成！  

```javascript
const len = citations.length;

citations.sort((a, b) => {
  return a > b ? -1 : 1;
});

for(let i = 0; i < len; i++) {
  if (citations[i] <= i) {
    return i;
  }
}

return len;
```
