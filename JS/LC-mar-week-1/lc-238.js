//https://leetcode.com/problems/product-of-array-except-self/solutions/2005799/javascript-solution-with-explanation-and-code-comments/?envType=study-plan-v2&envId=leetcode-75

var productExceptSelf = function (nums) {
  const prefix = [];

  for (let i = 0; i < nums.length; ++i) {
    if (i === 0) {
      prefix[i] = 1;
    } else {
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  // Then, let's create a suffix array
  const suffix = [];

  // Move right in the input array
  for (let i = nums.length - 1; i >= 0; i--) {
    // For the last index, we have no suffix, so just add a 1 to that position
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      // Otherwise, we multiply nums[i+1] by the suffix at position i+1
      // and add that to the suffix array at position i
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
};

const nums1 = [1, 2, 3, 4];
const nums2 = [-1, 1, 0, -3, 3];
const nums3 = [0, 0];

console.log(productExceptSelf(nums1));
console.log(productExceptSelf(nums2));
console.log(productExceptSelf(nums3));
