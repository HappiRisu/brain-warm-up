// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

const str1 = '4556364607935616';
const str2 = '64607935616';
const str3 = '1';
const str4 = '';

function maskify(str) {
  return str.slice(-4).padStart(str.length, '#');
}

console.log(maskify(str1));
console.log(maskify(str2));
console.log(maskify(str3));
console.log(maskify(str4));
