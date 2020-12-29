'use strict';
/**
 * 按要求补齐数组
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */

var minPatches = function(nums, n) {
    /**
     * 贪心
     * 
     * 时间复杂度O(m+logn)
     * 空间复杂度O(1)
     */
    let result = 0;
    let index = 0;
    let rangeRight = 1;
    while (rangeRight <= n) {
        if (nums[index] <= rangeRight) {
            rangeRight += nums[index];
            index++;
        } else {
            rangeRight *= 2;
            result++;
        }
    }
    return result;
};
// const nums = [1,3], n = 6;  // 1;
// const nums = [1,5,10], n = 20;  // 2;
const nums = [1,2,2], n = 5; // 0;
console.log(minPatches(nums, n));