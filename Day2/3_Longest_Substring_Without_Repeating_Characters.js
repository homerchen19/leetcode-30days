/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let maxLength = 0, count = 0;
  let charSet = new Set();
  let leftBound = 0, rightBound = 0;

  if(!s) {
    return maxLength;
  }

  while (rightBound < s.length) {
    const char = s[rightBound];

    if(!charSet.has(char)) {
      charSet.add(char);
      count++;

      if(count > maxLength) {
        maxLength = count;
      }
    } else {
      while(s[leftBound] !== s[rightBound]) {
        charSet.delete(s[leftBound]);
        leftBound++;
        count--;
      }

      leftBound++
    }
    
    rightBound++;
  }

  return maxLength;
};
