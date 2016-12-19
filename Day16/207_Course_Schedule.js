/**
 * There are a total of n courses you have to take, labeled from 0 to n - 1.
 *
 * Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 *
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
 *
 * For example:
 *
 * 2, [[1,0]]
 * There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.
 *
 * 2, [[1,0],[0,1]]
 * There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 *
 * Note:
 * The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
 * 
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
