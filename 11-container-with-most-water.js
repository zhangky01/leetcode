'use strict';
/**
 * 盛最多水的容器
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length < 2) return 0;

    /* // 暴力求解O(n^2) 空间O(1)
    let maxArea = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let pickHeight = Math.min(height[i], height[j]);
            maxArea = Math.max(maxArea, pickHeight * (j - i));
        }
    }
    return maxArea */

    // 左右夹逼O(n) 空间O(1)
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        let currentArea = (right - left) * (height[left] < height[right] ? height[left++] : height[right--]);
        maxArea = Math.max(maxArea, currentArea);
    }
    return maxArea
};

const testCase = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(testCase));