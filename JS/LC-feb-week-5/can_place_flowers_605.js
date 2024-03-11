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



const osarai = (flowerbed, n) => {

  const prev = -1;
  const next = 1;
  let count = 0;

  for(let i = 0; i < flowerbed.length; i++){
    console.log(canPlant(flowerbed, prev + i), canPlant(flowerbed, i), canPlant(flowerbed, next + i))
    if(canPlant(flowerbed, prev + i) + canPlant(flowerbed, i) + canPlant(flowerbed, next + i) === 0){
      flowerbed[i] = 1;
      count++;
    }
    
  }
  return count >= n
  
}

const canPlant = (flowerbed, n) => {

  if(n < 0 || n >= flowerbed.length){
    return 0;
  }

  return flowerbed[n];
}

console.log(osarai([1, 0], 1))