/**
 * There are a total of n courses you have to take, labeled from 0 to n - 1.
 *
 * Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 *
 * Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.
 *
 * There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.
 *
 * For example:
 *
 * 2, [[1,0]]
 * There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]
 *
 * 4, [[1,0],[2,0],[3,1],[3,2]]
 * There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].
 * 
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
