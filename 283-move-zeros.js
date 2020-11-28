'use strict';

/**
 * 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /**
     * 双层循环 O(n^2) 空间O(1)
     * 外层遍历找0找到之后，然后从0后面找到一个非0，交换。如果没找到，则说明移动完成。
     */
    /* for(let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (cur !== 0) continue;
        let find = false;
        for (let j = i + 1; j < nums.length; j++) {
            const pick = nums[j];
            if (pick === 0) continue;
            find = true;
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            break;
        }
        if (!find) break;
    }
    return nums; */

    /**
     * 双指针 O(n), 空间O(1)
     * index索引用来指定0的位置，index之前都是非0元素
     */
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        nums[index] = nums[i];
        if (index !== i) nums[i] = 0;
        index++;
    }
    return nums;
};

const testCase = [0,1,0,3,12];
console.log(moveZeroes(testCase));