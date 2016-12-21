# [Leetcode-18/30][Graph] #133 Clone Graph

## #133 Clone Graph

#### 題目難度：Medium :star::star:
#### 題目敘述：
```
Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.


OJ's undirected graph serialization:
Nodes are labeled uniquely.

We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
As an example, consider the serialized graph {0,1,2#1,2#2,2}.

The graph has a total of three nodes, and therefore contains three parts as separated by #.

First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
Second node is labeled as 1. Connect node 1 to node 2.
Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
Visually, the graph looks like the following:

       1
      / \
     /   \
    0 --- 2
         / \
         \_/
```
#### 題目解答：
```javascript
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
const dfs = (node, visited) => {
  let newNode = visited[node.label] ? visited[node.label] : new UndirectedGraphNode(node.label);
  visited[node.label] = newNode;

  for(let i = 0; i < node.neighbors.length; i++) {
    const newNeighbor = visited[node.neighbors[i].label] ? visited[node.neighbors[i].label] : dfs(node.neighbors[i], visited);
    newNode.neighbors.push(newNeighbor);
  }

  return newNode;
};

const cloneGraph = graph => {
  let visited = {};

  if(graph === null){
    return graph;
  } else {
    return dfs(graph, visited);
  }
};
```
#### 題目連結：[133. Clone Graph](https://leetcode.com/problems/clone-graph/)
#### 解題說明：
今天是第 18 天啦～  終於要度過 `graph` 篇了！  

今天的題目題意很簡單，給你一個無向圖，要我們歷遍整個圖，並複製一個出來，  
這題是考對 `graph` 資料結構的歷遍方法而已，
我們使用 **DFS** 來歷遍圖，並且用 `JavaScript` 的 `Object` 實作 `HashMap` 的用途，負責記錄走過的點，  
這樣就可以了～  

#### 解題步驟：
- 步驟 1.  
我們用 `visited` 這個 `Object` 來存我們走過的點，但最後不是回傳這個變數，這只是存在過程中走過的點而已。  

```javascript
let visited = {};

if(graph === null){
  return graph;
} else {
  return dfs(graph, visited);
}
```  

- 步驟 2.  
這步驟是最主要的 **DFS** 歷遍的 `function`，  
`newNode` 是用來存每一次迭代時最新的節點，第一次進來則是 `new UndirectedGraphNode(node.label)`，  
然後把它放進 `visited` 裡面記錄起來，  

  最後只要在下面的 `for` loop 裡面每次用 **DFS** 去檢查該節點有沒有相鄰的節點，如果有的話就把它放進 `neighbors` 裡面，  
  完成！  

```javascript
const dfs = (node, visited) => {
  let newNode = visited[node.label] ? visited[node.label] : new UndirectedGraphNode(node.label);
  visited[node.label] = newNode;

  for(let i = 0; i < node.neighbors.length; i++) {
    const newNeighbor = visited[node.neighbors[i].label] ? visited[node.neighbors[i].label] : dfs(node.neighbors[i], visited);
    newNode.neighbors.push(newNeighbor);
  }

  return newNode;
};
```
