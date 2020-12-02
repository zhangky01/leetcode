'use strict';
/**
 * 最大拼接数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    /**
     * 单调栈
     * 空间O(k),时间O(k(m+n+k^2))
     */
    let result = new Array(k).fill(0);
    let n1 = nums1.length, n2 = nums2.length;
    let start = Math.max(0, k - n2), end = Math.min(k, n1);
    for (let i = start; i <= end; i++) {
        let subSequence1 = pickSubSequence(nums1, i);
        let subSequence2 = pickSubSequence(nums2, k - i);
        let maxSequence = merge(subSequence1, subSequence2);
        if (compare(maxSequence, 0, result, 0) > 0) {
            result = maxSequence.slice(0, k);
        } 
    }
    return result;
};

// 挑选指定长度的最大子序列
function pickSubSequence(nums, k) {
    const length = nums.length;
    const stack = new Array(k).fill(0);
    let top = -1;
    let remain = length - k;
    for (let i = 0; i < length; i++) {
        const num = nums[i];
        while (top >= 0 && stack[top] < num && remain > 0) {
            top--;
            remain--;
        }
        if (top < k - 1) {
            stack[++top] = num;
        } else {
            remain--;
        }
    }
    return stack;
}

function compare(array1, index1, array2, index2) {
    const l1 = array1.length, l2 = array2.length;
    while (index1 < l1 && index2 < l2) {
        let difference = array1[index1] - array2[index2];
        if (difference !== 0) return difference;
        index1++;
        index2++;
    }
    return (l1 - index1) - (l2 - index2);
}

function merge(subSequence1, subSequence2) {
    let s1 = subSequence1.length;
    if (s1 === 0) return subSequence2;
    let s2 = subSequence2.length;
    if (s2 === 0) return subSequence1;
    let iterCount = s1 + s2;
    let result = [], s1Index = 0, s2Index = 0;
    for (let i = 0; i < iterCount; i++) {
        result[i] = compare(subSequence1, s1Index, subSequence2, s2Index) > 0 ? subSequence1[s1Index++] : subSequence2[s2Index++];
    }
    return result;
}

// const nums1 = [3, 4, 6, 5], nums2 = [9, 1, 2, 5, 8, 3], k = 5;   // [9, 8, 6, 5, 3]
// const nums1 = [6, 7], nums2 = [6, 0, 4], k = 5;
// const nums1 = [9,1,2,5,8,3], nums2 = [3,4,6,5], k = 5;

// const nums1 = [7,6,1,9,3,2,3,1,1], nums2 = [4,0,9,9,0,5,5,4,7], k = 9; // [9,9,9,7,3,2,3,1,1]
// const nums1 = [6,3,9,0,5,6], nums2 = [2,2,5,2,1,4,4,5,7,8,9,3,1,6,9,7,0], k = 23;

const nums1 = [1,5,8,1,4,0,8,5,0,7,0,5,7,6,0,5,5,2,4,3,6,4,6,6,3,8,1,1,3,1,3,5,4,3,9,5,0,3,8,1,4,9,8,8,3,4,6,2,5,4,1,1,4,6,5,2,3,6,3,5,4,3,0,7,2,5,1,5,3,3,8,2,2,7,6,7,5,9,1,2]
const nums2 = [7,8,5,8,0,1,1,6,1,7,6,9,6,6,0,8,5,8,6,3,4,0,4,6,7,8,7,7,7,5,7,2,5,2,1,9,5,9,3,7,3,9,9,3,1,4,3,3,9,7,1,4,4,1,4,0,2,3,1,3,2,0,2,4,0,9,2,0,1,3,9,1,2,2,6,6,9,3,6,0]
const k = 80;
console.log(maxNumber(nums1, nums2, k));
console.log([9,9,9,9,9,9,9,9,9,8,8,7,7,6,6,5,5,4,3,6,4,6,6,3,8,1,1,3,1,3,5,4,3,9,5,0,3,8,1,4,9,8,8,3,4,6,2,5,4,1,1,4,6,5,2,3,6,3,5,4,3,0,7,2,5,1,5,3,3,8,2,2,7,6,7,5,9,1,2,0]);