let testCase = [3,6,5,7,4,8,1,0];
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // 1. 暴力求解1，任意两个柱子能组成的最大面积 O(n^3),
    /* let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        for (let j = i; j < heights.length; j++) {
            let min = heights[i];
            for (let k = i; k <=j; k++) {
                if (heights[k] < min) {
                    min = heights[k];
                }
            }
            let area = (j - i + 1) * min;
            if (maxArea < area) maxArea = area;
        }
    } */

    // 2. 暴力求解2，每个柱子能组成的最大面积。需要查找左右边界 O(n^2)
    /* let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        let currentHeight = heights[i];
        let left = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (heights[j] < currentHeight) {
                left = j + 1;
                break;
            }
        }
        let right = heights.length - 1;
        for (let k = i + 1; k < heights.length; k++) {
            if (heights[k] < currentHeight) {
                right = k - 1;
                break;
            }
        }
        let area = (right - left + 1) * currentHeight;
        maxArea = Math.max(area, maxArea);
    } */

    // 3. 借助栈，并添加哨兵 O(n)
    let maxArea = 0;
    let stack = [0];
    heights = [0].concat(heights);
    heights.push(0);
    for (let i = 1; i < heights.length; i++) {
        while (heights[i] < heights[stack[stack.length - 1]]) {
            let area = heights[stack.pop()] * (i - stack[stack.length - 1] - 1);
            maxArea = Math.max(maxArea, area);
        }
        stack.push(i)
    }
    return maxArea;
};

console.log(largestRectangleArea(testCase));
