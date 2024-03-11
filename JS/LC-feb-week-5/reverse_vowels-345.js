let s = 'aA';

// mySolution
var reverseVowels = function (s) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let splitS = s.split('');
  let newObj = {};

  splitS.forEach((element, index) => {
    if (vowel.indexOf(element.toLowerCase()) >= 0) {
      newObj[index] = element;
    }
  });

  const keys = Object.keys(newObj).reverse();
  const values = Object.values(newObj);

  for (let i = 0; i < splitS.length; ++i) {
    splitS[keys[i]] = values[i];
  }

  return splitS.join('');
};

// console.log(reverseVowels(s));

//other answer
var reverseVowels = function (s) {
  let left = 0; //0
  let right = s.length - 1; //7
  let arr = s.split(''); //"l", "e", "e", "t", "c", "o", "d", "e"
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  while (left < right) {
    //
    if (vowels.indexOf(arr[left]) !== -1 && vowels.indexOf(arr[right]) !== -1) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      ++left;
      --right;
    }
    if (vowels.indexOf(arr[left]) == -1) {
      ++left;
    }
    if (vowels.indexOf(arr[right]) == -1) {
      --right;
    }
  }
  return arr.join('');
};


let testWord = "hello";

const osarai = (s) => {
  let left = 0;
  let right = s.length - 1;
  let arr = s.split("");
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  while(left < right){
    if(vowels.indexOf(arr[left]) !== -1 && vowels.indexOf(arr[right]) !== -1){
      [arr[right],arr[left]] = [arr[left], arr[right]];
      ++left;
      --right;
    }
    if(vowels.indexOf(arr[left]) == -1){
      left++;
    }
    if(vowels.indexOf(arr[right]) == -1){
      right--;
    }
  }

  return arr.join("")
}

console.log(osarai(testWord));

