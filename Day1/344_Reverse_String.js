/**
 * Write a function that takes a string as input and returns the string reversed.
 *
 * Example:
 * Given s = "hello", return "olleh".
 *
 * @param {string} s
 * @return {string}
 */
const reverseString = s => {
    if(!s) {
        return s;
    }

    return s.split('').reverse().join('');
};
