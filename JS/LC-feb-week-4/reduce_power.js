// Some numbers have funny properties. For example:

// - 89 --> 8¹ + 9² = 89 * 1
// - 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// - 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given two positive integers `n` and `p`, we want to find a positive integer `k`, if it exists, such that the sum of the digits of `n` raised to consecutive powers starting from `p` is equal to `k * n`.
// In other words, writing the consecutive digits of `n` as `a, b, c, d ...`, is there an integer `k` such that :
// If it is the case we will return `k`, if not return `-1`.
// **Note**: `n` and `p` will always be strictly positive integers.

const n1 = 89,
  p1 = 1;
const n2 = 695,
  p2 = 2;
const n3 = 46288,
  p3 = 3;
const n4 = 92,
  p4 = 1;

function reduce_power(n, p) {
  let result = n
    .toString()
    .split('')
    .reduce((a, c, i) => a + c ** (i + p), 0);

  return result % n ? 0 : result / n;
}

console.log(reduce_power(n1, p1));
console.log(reduce_power(n2, p2));
console.log(reduce_power(n3, p3));
console.log(reduce_power(n4, p4));
