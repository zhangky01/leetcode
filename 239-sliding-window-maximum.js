'use strict';
/**
 * 滑动窗口最大值
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    /**
     * 最普通，且暴力的方法。使用双指针，作为窗口边界。每次查询窗口最大值。
     * 时间复杂度O(k * (nums.length - k + 1))
     * 空间复杂度（去除存储结果的result）O(1)
     */
    let result = [];
    let left = 0, right = k - 1;
    while (right < nums.length) {
        result.push(_max(nums, left, right));
        left++;
        right++;
    }
    return result;
    function _max(array, start, end) {
        let maxValue = array[start];
        for (let i = start + 1; i <= end; i++) {
            if (maxValue < array[i]) maxValue = array[i];
        }
        return maxValue;
    }
};
// const nums = [1,3,-1,-3,5,3,6,7], k = 3;    // [3,3,5,5,6,7];
// const nums = [1], k = 1;    // [1];
// const nums = [9,11], k = 2;  // [11]
// const nums = [4,-2], k = 2;     // [4]
// const nums = [1,-1], k = 1;     // [1, -1]
console.log(maxSlidingWindow(nums, k));