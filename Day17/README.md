# [Leetcode-17/30][Graph] #210 Course Schedule II

## #210 Course Schedule II

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]

4, [[1,0],[2,0],[3,1],[3,2]]
There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].
```
#### 題目解答：
```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  let courses = [];
  let prereqCounts = [];
  let result = [];
  let queue = [];
  let temp;

  for(let i = 0; i < numCourses; i++) {
    courses.push(new Set());
  }

  for(let i = 0; i < prerequisites.length; i++) {
    courses[prerequisites[i][1]].add(prerequisites[i][0]);
  }

  for(let i = 0; i < numCourses; i++) {
    prereqCounts[i] = 0;
  }

  for(let i = 0; i < numCourses; i++) {
    temp = Array.from(courses[i]);

    for(let j = 0; j < temp.length; j++) {
      prereqCounts[temp[j]]++;
    }
  }

  for(let i = 0; i < numCourses; i++) {
    if(prereqCounts[i] === 0) {
      queue.push(i);
      prereqCounts[i] = -1;
    }
  }

  while(queue.length > 0) {
    const j = queue.shift();
    result.push(j);

    temp = Array.from(courses[j]);

    for(let i = 0; i < temp.length; i++) {
      prereqCounts[temp[i]]--;

      if(prereqCounts[temp[i]] === 0) {
        queue.push(temp[i]);
        prereqCounts[temp[i]] = -1;
      }
    }
  }

  if(result.length === numCourses) {
    return result;
  }

  return [];
};
```
#### 題目連結：[210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
#### 解題說明：
今天是主題 `graph` 的第二篇～  
承襲昨天的題目 [207. Course Schedule](https://github.com/xxhomey19/leetcode-30days/tree/master/Day16)，今天來寫他的延伸題 [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)，  

與前一題想比，前一題是是判斷是否能修完所有課，所以是**找有向圖裡有沒有環**，  
而這題則是要我們**找出上課的順序**，即有向圖的拓樸排序，  
因為有先做過前一題，我們只要把前一題稍作修改即可解決這題！  
在下面的解題步驟中，我僅說明與前一題不同之處做說明～  
因為基本上都是同一套邏輯，只是多加了一個 `queue` 進去，然後換 **BFS** 去跑而已！  

#### 解題步驟：
- 步驟 1.  
我們多宣告了兩個變數，
`result` 是用來存回傳的答案，  
`queue` 則是我們用來**記錄拓墣排序的順序**，也是本題的關鍵！  
我們先將 `prereqCounts[i] === 0`，也就是沒有連到其他課的節點放到 `queue` 裡，因為這些都是**BFS的頭，同時也是拓墣排序的起點**。  

```javascript
let result = [];
let queue = [];

...

for(let i = 0; i < numCourses; i++) {
  if(prereqCounts[i] === 0) {
    queue.push(i);
    prereqCounts[i] = -1;
  }
}
```  

- 步驟 2.  
這裡是主要 **BFS** 的演算法，  
每次都先把 `queue` 的頭拿出來放進 `result`，也就是記錄下排序的過程，  
然後把這個點有關的邊一個一個刪掉，直到沒邊了再放進 `queue`  裡，  
並標記邊數為 -1 ，繼續跑迴圈。  

  最後如果 `result` 的個數和課程總數一樣，代表順利能修完所有課程，回傳 `result`，  
反之，回傳空陣列 `[]`，  
完成！  

```javascript
while(queue.length > 0) {
  const j = queue.shift();
  result.push(j);

  temp = Array.from(courses[j]);

  for(let i = 0; i < temp.length; i++) {
    prereqCounts[temp[i]]--;

    if(prereqCounts[temp[i]] === 0) {
      queue.push(temp[i]);
      prereqCounts[temp[i]] = -1;
    }
  }
}

if(result.length === numCourses) {
  return result;
}

return [];
```  
