// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const str1 = 'din'; // "((("
const str2 = 'recede'; // "()()()"
const str3 = 'Success'; // ")())())"

function toBracket(str) {
  return str
    .toUpperCase()
    .split('')
    .map((a, i, w) => (w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'))
    .join('');
}

console.log(toBracket(str1));
console.log(toBracket(str2));
console.log(toBracket(str3));
