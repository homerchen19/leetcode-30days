/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  if(a === 0) return b;
  if(b === 0) return a;

  let carry = 0;

  while(b !== 0) {
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
};
