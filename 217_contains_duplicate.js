'use strict';
/**
 * 存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /**
     * 哈希表
     * 时间O(N),空间O(N)
     */
    /* let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false; */

    /**
     * 排序：
     * 时间复杂度(nlogn),空间O(logn)
     */
    nums = nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true;
    }
    return false;
};
// const nums = [1,2,3,1]; // true;
// const nums = [1,2,3,4]; // false;
const nums = [1,1,1,3,3,4,3,2,4,2]; // true;
console.log(containsDuplicate(nums));