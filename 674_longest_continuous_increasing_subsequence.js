'use strict';
/**
 * 最长连续递增序列
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    /**
     * 题解：https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/solution/jian-jian-dan-dan-yi-ci-bian-li-by-_ky-mmlk/
     */
    let result = 0, start = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            result = Math.max(i - start, result);
            start = i;
            if (nums.length - start < result) return result;
        }
    }
    return Math.max(nums.length - start, result);
};
const nums = [1,3,5,4,7];       // 3
// const nums = [2,2,2,2,2];    // 1
// const nums = [1,3,5,4,2,3,4,5]; // 4
console.log(findLengthOfLCIS(nums));