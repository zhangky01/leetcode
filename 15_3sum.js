let nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
let result = [
    [-1, 0, 1],
    [-1, -1, 2]
];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    for (let k = 0; k < nums.length - 2; k++) {
        if (nums[k] > 0) break;
        if (k > 0 && nums[k] === nums[k - 1]) continue;
        let i = k + 1, j = nums.length - 1;
        while (i < j) {
            let sum = nums[k] + nums[i] + nums[j];
            if (sum === 0) {
                result.push([nums[k], nums[i], nums[j]]);
                while (nums[++i] === nums[i - 1] && i < j);
                while (nums[--j] === nums[j + 1] && j > i);
            } else if (sum < 0) {
                while (nums[++i] === nums[i - 1] && i < j);
            } else if (sum > 0) {
                while (nums[--j] === nums[j + 1] && j > i);
            }
        }
    }
    return result;
};

console.log(threeSum(nums));