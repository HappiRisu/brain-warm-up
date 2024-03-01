const s1 = 'the sky is blue';
const s2 = '  hello world  ';
const s3 = 'a good   example';

var reverseWords = function (s) {
  return s
    .split(' ')
    .filter((element) => element.length)
    .reverse()
    .join(' ');
};

//other solution
var reverseWords2 = function (s) {
  s = s.split(' ');
  let res = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != '') res.push(s[i]);
  }
  return res.join(' ');
};

//other solution
const reverseWords3 = function (s) {
  const ret = [];
  let word = [];
  for (let i = 0; i < s.length; ++i) {
    console.log('s.charAt(i)', s.charAt(i));
    if (s.charAt(i) === ' ') {
      // We found the space, put word in front (if there is any)
      word.length > 0 && ret.unshift(word.join(''));
      // Reset the current word
      word = [];
    } else {
      // Add characters to the current word
      word.push(s.charAt(i));
    }
  }
  // If there is current word exists, add it in front
  word.length > 0 && ret.unshift(word.join(''));
  return ret.join(' ');
};

reverseWords3(s2);
