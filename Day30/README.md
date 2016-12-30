# [Leetcode-30/30][Combinations] #39 Combination Sum

## #39 Combination Sum

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

For example, given candidate set [2, 3, 6, 7] and target 7,
A solution set is:

[
  [7],
  [2, 2, 3]
]
```
#### 題目解答：
```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const dfs = (start, target, candidates, sum, curArr, result) => {
  if(sum === target) {
    result.push(curArr.concat());
  }

  for(let i = start; i < candidates.length; i++) {
    if(sum + candidates[i] <= target) {
      curArr.push(candidates[i]);
      dfs(i, target, candidates, sum + candidates[i], curArr, result);
      curArr.pop();
    }
  }
};

const combinationSum = (candidates, target) => {
  let result = [];
  candidates.sort((a, b) => {
    return a > b ? 1 : -1;
  })

  dfs(0, target, candidates, 0, [], result);

  return result;
};
```
#### 題目連結：[39. Combination Sum](https://leetcode.com/problems/combination-sum/)
#### 解題說明：
終於來到最後一天啦啦啦啦啦！！！！！  
三十天的 leetcode 要結束了！！！！！  

我們先來解最後一題吧～題目給我們一個陣列裡面裝可以用的數字，和一個數字，我們要用陣列裡的數字去組合出這個數字，  
跟[昨天的題目](https://github.com/xxhomey19/leetcode-30days/tree/master/Day29)很像，但這次除了組合，還多了總和的概念，不過大致上想法一模一樣～  
一樣是用 **DFS** 去解，下面會詳細說明！  

#### 解題步驟：
- 步驟 1.  
我們先幫 `candidates` 進行排序，是方便後面用加的方式可以少遞迴一些，  
然後我們把參數傳進去 `dfs()`。  

```javascript
const combinationSum = (candidates, target) => {
  let result = [];
  candidates.sort((a, b) => {
    return a > b ? 1 : -1;
  })

  dfs(0, target, candidates, 0, [], result);

  return result;
};
```  
- 步驟 2.  
這裡是主要遞迴的部分，
首先，只有 `sum === target` 時我們才要把這個組合放進答案 `result` 裡，  

  接著，一樣一次放一個數字進去加看看，要注意的是，傳給 `dfs` 的第一個參數 `i` 不需要 `+1`，因為 `i` 是可以重複使用的，如果說不能重使用的話，那就不能讓 `i` 在下一次遞迴時還跟這次一樣了！  
  然後跑完一次遞迴要 `pop` 掉一個空位給下一個數字進來家看看，完成！  

```javascript
const dfs = (start, target, candidates, sum, curArr, result) => {
  if(sum === target) {
    result.push(curArr.concat());
  }

  for(let i = start; i < candidates.length; i++) {
    if(sum + candidates[i] <= target) {
      curArr.push(candidates[i]);
      dfs(i, target, candidates, sum + candidates[i], curArr, result);
      curArr.pop();
    }
  }
};
```  

## 結語
很開心自己終於撐過去 30 天了！從本來對演算法、資料結構沒什麼把握，到現在總算都先 run 過一點，對題目也有點感覺了，  
但這樣明顯還是不夠的，如果要去應徵大公司的話至少要刷個一兩百題才夠吧，  
而且還要訓練到一看到題目至少就能在腦子裡順好怎麼寫了，不然面試當場會緊張，時間也沒有那麼多，一慌就很難想到解法了！  
希望能以此 30 篇基礎的 leetcode 題當作開頭，未來在面對新題目時可以不至於沒有想法，也祝大家 2017 年快樂了！  
謝謝大家的支持！  
