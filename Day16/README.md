# [Leetcode-16/30][Graph] #207 Course Schedule

## #207 Course Schedule

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

2, [[1,0],[0,1]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
```
#### 題目解答：
```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  let courses = [];
  let prereqCounts = [];
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
    let j;

    for(j = 0; j < numCourses; j++) {
      if(prereqCounts[j] === 0) {
        break;
      }
    }

    if (j === numCourses) {
      return false;
    }

    prereqCounts[j] = -1;
    temp = Array.from(courses[j]);
    for (let k = 0; k < temp.length; k++) {
      prereqCounts[temp[k]]--;
    }
  }

  return true;
};
```
#### 題目連結：[207. Course Schedule](https://leetcode.com/problems/course-schedule/)
#### 解題說明：
今天是第 16 天，又是新的篇章開始了！  
接下來的主題都會越來越難，像這次是 `graph`，我就找不到難度 **Easy** 的題目了...  
沒辦法，這次就直接從難度 **Medium** 的 [207. Course Schedule](https://leetcode.com/problems/course-schedule/) 開始吧～  

題意把有向圖包裝成課程表，要我們判斷某堂課要求先修的課所形成的圖，能不能讓學生順利修完所有的課，  
像是範例給 `2, [[1,0],[0,1]]` 說明要修 `課程 1` 要先修 `課程 0`，但又說要修`課程 0` 要先修 `課程 1`，所以不合理，  
那說這麼多，其實就是要考**有像圖中有沒有 `cycle`** ，  
如果有 `cycle` 那就是不合理，回傳 `false`，反之回傳 `true`。  

這題我們使用 **拓墣排序 + DFS** 來解～  
詳細步驟將在下方說明！  

#### 解題步驟：
- 步驟 1.  
`courses` 是一個存 `Set` 的陣列，是用來建有向圖的，  
`prereqCounts` 則是記錄圖上每一個點目前仍被多少條邊連到，下一個步驟會說明，算是拓墣排序會用到的變數。  

我們先初始化 `courses` 成一堆 `Set`，  
然後將 `courses[prerequisites[i][1]]` 一一加入 `prerequisites[i][0]` 這些先修課。
```javascript
let courses = [];
let prereqCounts = [];
let temp;

for(let i = 0; i < numCourses; i++) {
  courses.push(new Set());
}

for(let i = 0; i < prerequisites.length; i++) {
  courses[prerequisites[i][1]].add(prerequisites[i][0]);
}
```  

- 步驟 2.  
先將 `prereqCounts` 初始化為 0，代表每個點預設被 0 條邊連到，  
然後使用 [`Array.from`](https://msdn.microsoft.com/zh-tw/library/dn858230(v=vs.94).aspx) 將 `Set` 轉成 `Array`，最後計算每個點上累積有多少條邊連著。  

```javascript
for(let i = 0; i < numCourses; i++) {
  prereqCounts[i] = 0;
}

for(let i = 0; i < numCourses; i++) {
  temp = Array.from(courses[i]);

  for(let j = 0; j < temp.length; j++) {
    prereqCounts[temp[j]]++;
  }
}
```  

- 步驟 3.  
這個步驟基本上就是實作[拓墣排序](http://www.csie.ntnu.edu.tw/~u91029/DirectedAcyclicGraph.html)，  
`j` 代表尋找沒有被任何邊連向的點，如果不幸最後 `j === numCourses` 就代表這個圖有環，  
剩下詳細步驟請參閱 **[拓墣排序](http://www.csie.ntnu.edu.tw/~u91029/DirectedAcyclicGraph.html)** 這篇，裡面有詳細且一步步的圖，讀完即可！  
完成！  

```javascript
for(let i = 0; i < numCourses; i++) {
  let j;

  for(j = 0; j < numCourses; j++) {
    if(prereqCounts[j] === 0) {
      break;
    }
  }

  if (j === numCourses) {
    return false;
  }

  prereqCounts[j] = -1;
  temp = Array.from(courses[j]);
  for(let k = 0; k < temp.length; k++) {
    prereqCounts[temp[k]]--;
  }
}

return true;
```
