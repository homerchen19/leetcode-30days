/**
 * Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.
 *
 * For example:
 *
 * Given "aacecaaa", return "aaacecaaa".
 *
 * Given "abcd", return "dcbabcd".
 *
 * @param {string} s
 * @return {string}
 */

const reverseString = s => s.split('').reverse().join('');

const shortestPalindrome = s => {
  const reverseStr = reverseString(s);
  const combineStr = s + '#' + reverseStr;
  const s_length = combineStr.length;
  const next = [];

  for(let i = 0; i < s_length; i++) {
    next.push(0);
  }

  for(let i = 1; i < s_length; i++) {
    let j = next[i - 1];

    while(j > 0 && (combineStr[i] !== combineStr[j])) {
      j = next[j - 1];
    }

    if(combineStr[i] === combineStr[j]) {
      j++;
    }

    next[i] = j;
  }

  return reverseStr.substring(0, s.length - next[s_length - 1]) + s;
