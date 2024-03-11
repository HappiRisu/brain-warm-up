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

// reverseWords3(s2);


// 
const s = '  the sky is blue  ';
var reverseWords = function(s) {
  // Trim the input string to remove leading and trailing spaces
  let i = 0, j = s.length - 1;
  console.log(i, j)
  while (i <= j && s[i] === ' ') i++;   // Find the first non-space character
  while (j >= i && s[j] === ' ') j--;   // Find the last non-space character
  console.log(i, j)
  s = s.substring(i, j + 1);            // Extract the trimmed substring

  // Split the trimmed string into words based on spaces
  let words = s.split(/\s+/);            // Tokenize the string into words
  console.log(words)
  // Initialize the output string
  let out = '';

  // Iterate through the words in reverse order
  for (let k = words.length - 1; k > 0; k--) {
      // Append the current word and a space to the output
      out += words[k] + ' ';
  }
  // Append the first word to the output (without trailing space)
  out += words[0];
  return out;                            // Concatenate the reversed words
};

// console.log(reverseWords(s))


const osarai = (s) => {
  
  let i = 0, j = s.length -1;
  while( i <= j && s[i] === " ") i++;
  while( j >= i && s[j] === " ") j--;

  s = s.substring(i, j + 1);
  let words = s.split(/\s+/);
  let out = '';

  for(let i = words.length - 1; i > 0; --i){
    out += (words[i] + " ");
  }

  out += words[0];

  return out;
}

console.log(osarai(s))