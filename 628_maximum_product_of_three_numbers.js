'use strict';
/**
 * 三个数的最大乘积
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    /**
     * 暴力
     * 时间O(n^3), 空间O(1)
     */
    /* let result = -Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                result = Math.max(result, nums[i] * nums[j] * nums[k]);
            }
        }
    }
    return result; */
    /**
     * 排序
     * 三个数最大：如果全是负数|或者全是正数，三个最大值最大。如果有正有负：则是三个最大值或是两个最小值和一个最大值的乘积
     * 时间复杂度：O(NlogN)，空间复杂度：O(logN)
     */
    /* nums.sort((a, b) => a - b);
    const n = nums.length;
    return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]); */

    /**
     * 线性表扫描
     * 找到最小的2个数和最大的三个数
     */
    // 最小的和第二小的
    let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;
    // 最大的、第二大的和第三大的
    let max1 = -Number.MAX_SAFE_INTEGER, max2 = -Number.MAX_SAFE_INTEGER, max3 = -Number.MAX_SAFE_INTEGER;

    for (const x of nums) {
        if (x < min1) {
            min2 = min1;
            min1 = x;
        } else if (x < min2) {
            min2 = x;
        }

        if (x > max1) {
            max3 = max2;
            max2 = max1;
            max1 = x;
        } else if (x > max2) {
            max3 = max2;
            max2 = x;
        } else if (x > max3) {
            max3 = x;
        }
    }

    return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};

// const nums = [1,2,3];   // 6;
const nums = [1,2,3,4]; // 24;
console.log(maximumProduct(nums));