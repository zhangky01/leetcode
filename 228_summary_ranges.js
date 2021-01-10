'use strict';
/**
 * 汇总区间
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    /**
     * 题目解析：https://leetcode-cn.com/problems/summary-ranges/solution/pu-pu-tong-tong-yi-tang-bian-li-by-_ky-t4g5/
     */
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        let end = start;
        while (nums[i] + 1 == nums[i + 1]) {
            i++;
        }
        end = nums[i];
        const range = start === end ? `${start}` : `${start}->${end}`;
        result.push(range);
    }
    return result;
};

// const nums = [0,1,2,4,5,7];     // ["0->2","4->5","7"]
// const nums = [0,2,3,4,6,8,9];       // ["0","2->4","6","8->9"]
console.log(summaryRanges(nums));