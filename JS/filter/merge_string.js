// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

const word1 = 'abcd';
const word2 = 'pqr';

function merge_string(w1, w2) {
  let maxLength = Math.max(w1.length, w2.length);
  let result = '';
  for (let i = 0; i < maxLength; ++i) {
    result = result + (w1[i] ?? '') + (w2[i] ?? '');
  }
  return result;
}

console.log(merge_string(word1, word2));
