'use strict';

/**
 * 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    /**
     * 双指针，从后向前
     * 时间复杂度：
     *     O(m + n)
     * 空间复杂度：
     *     O(1)
     */
    let n1 = m - 1, n2 = n - 1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (nums1[n1] === undefined) {
            nums1[i] = nums2[n2--];
            continue;
        };
        nums1[i] = nums1[n1] < nums2[n2] ? nums2[n2--] : nums1[n1--];
    }
    return nums1;
};

/* const nums1 = [1,2,3,0,0,0], m = 3;
const nums2 = [2,5,6],       n = 3; */
const nums1 = [0], m = 0;
const nums2 = [1], n = 1;
console.log(merge(nums1, m, nums2, n));