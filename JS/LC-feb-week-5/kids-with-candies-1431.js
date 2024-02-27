const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

// const candies = [4, 2, 1, 1, 2];
// const extraCandies = 1;

// const candies = [12, 1, 12];
// const extraCandies = 10;

const kidsWithCandies = function (candies, extraCandies) {
  return candies.map((candy, index, arr) => {
    let imFalse = false;
    for (let i = 0; i < arr.length; ++i) {
      if (i === index) continue;
      imFalse = candy + extraCandies >= arr[i];
      if (!imFalse) return imFalse;
    }
    return imFalse;
  });
};

console.log(kidsWithCandies(candies, extraCandies));

// another solution
const kidsWithCandies2 = (candies, extraCandies) => {
  const maxCandies = [...candies].sort((a, b) => +a - b).pop(); // note string to number coercion
  return candies.map((k) => maxCandies <= k + extraCandies);
};

console.log(kidsWithCandies2(candies, extraCandies));

// +a - b 가 양수면 오름차순으로 정렬
