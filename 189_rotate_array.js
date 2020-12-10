'use strict';
/**
 * 旋转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    /**
     * 冒泡
     * 时间O(kn),空间O(1)
     */
    /* for (let q = 0; q < k; q++) {
        for (let i = nums.length - 1; i > 0; i--) {
            [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
        }
    }
    return nums; */

    /**
     * 找一个临时座位
     * 时间O(n)空间O(1)
     */
    let count = 0;
    for (let i = 0; count < nums.length; i++) {
        let current = i;
        let pre = nums[current];
        do {
            let next = (current + k) % nums.length;
            let temp = nums[next];
            nums[next] = pre;
            pre = temp;
            current = next;
            count++;
        } while (current !== i);
    }
    return nums;
};

const nums = [1,2,3,4,5,6,7], k = 3    // [5,6,7,1,2,3,4] 
// const nums = [-1,-100,3,99], k = 2;   // [3,99,-1,-100]
console.log(rotate(nums, k));