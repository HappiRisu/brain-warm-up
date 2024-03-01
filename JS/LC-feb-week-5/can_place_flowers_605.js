// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

const canPlaceFlowers = function (flowerbed, n) {
  let prev = -1;
  let next = 1;
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++, prev++, next++) {
    if (isPlot(flowerbed, prev) + isPlot(flowerbed, i) + isPlot(flowerbed, next) === 0) {
      flowerbed[i] = 1;
      count++;
    }
  }

  return count >= n;
};

const isPlot = (flowerbed, index) => {
  if (index < 0 || index >= flowerbed.length) {
    return 0;
  }
  return flowerbed[index];
};

const flowerbed = [1, 0, 0, 0, 0, 0, 0, 1];
const n = 2;

// console.log(canPlaceFlowers(flowerbed, n));

// another answer 아직 이해 못함.
var canPlaceFlowers2 = function (flowerbed, n) {
  let current = 0; //
  const size = flowerbed.length; // 꽃밭의 길이

  for (var i = 0; i <= size; i++) {
    if (i < size && flowerbed[i] == 0) {
      // 1. i가 배열안에 있는지 확인 2. 0인지 확인
      current++;
      if (i == 0) current++;
      if (i == size - 1) current++;

      console.log('current -if : ', current);
    } else {
      n -= Math.trunc((current - 1) / 2);
      if (n <= 0) return true;
      current = 0;

      console.log('current -else : ', current);
    }
  }
  return false;
};
