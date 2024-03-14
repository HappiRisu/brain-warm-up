let chars1 = ["a","a","b","b","c","c","c"]
let chars2 = ["a"]
let chars3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]


// var compress = function(chars) {
//   let result = "";
//   let temp = chars.shift();
//   let count = 1;

//   while(temp){
//     let shiftedWord = chars.shift();
//     if(temp === shiftedWord){
//       count++;
//     }else{
//       result = result + temp + (count === 1 ? "" : count); 
//       temp = shiftedWord;
//       count = 1;
//     }
//   }

//   return result.split("");
// };



// var compress = function(chars) {

//   let result = "";
//   let temp = chars[0]
//   let count = 1;

//   for(let i = 1; i <= chars.length; ++i){
//     if(temp === chars[i]){
//       count++;
//     }else{
//       result = result + temp + (count === 1 ? "" : count); 
//       temp = chars[i];
//       count = 1;
//     }
//   }
//   return result;
// };

// console.log(compress(chars1))
// console.log(compress(chars2))
// console.log(compress(chars3))
// aabbccc 7
function compress1(chars) {
  let read = 0; // Pointer to read characters
  let write = 0; // Pointer to write compressed characters

  while (read < chars.length) { 
    let char = chars[read]; //store the char were working on 
    let count = 0;

    // Count repeating chars in this set
    while ( read < chars.length &&  //were not at the end
            chars[read] === char) { //there is a match
      read++;
      count++;
    }

    // Write the character
    chars[write++] = char;

    // If count > 1, write the count digits
    // we use digits to correctly inc our write pointer for multi digit nums
    if (count > 1) {
      const countStr = count.toString();
      for (let digit of countStr) {
        chars[write++] = digit;
      }
    }
  }

  // Sneakily trim to our new length by setting length directly
  chars.length = write;

  return write;
}

function compress2(chars){

  let read = 0;
  let write = 0;

  while(read < chars.length){
    let char = chars[read];
    let count = 0;

    while(read < chars.length && chars[read] === char){
      read++;
      count++;
    }

    chars[write++] = char;

    if(count > 1){
      const countStr = count.toString();
      for(let i of countStr){
        chars[write++] = i;
      }
    }
  }
  chars.length = write;

  return write;

}


console.log(compress2(chars1))
// console.log(compress(chars2))
// console.log(compress(chars3))

