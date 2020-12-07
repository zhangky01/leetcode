'use strict';
/**
 * 删除数组重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /**
     * 双指针，用于指不重复的数的位置
     * 空间O(1),时间O(n)
     */
    if (nums.length == 0) return 0;
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index++] = nums[i];
        }
    }
    return index;
};

const nums = [1,1,2];
// const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));