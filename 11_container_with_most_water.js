let testCase = [1,8,6,2,5,4,8,3,7];
let result = 49;
var maxArea = function(height) {
    // 遍历,两两组合   O(n^2)
    /* let maxResult = Number.MIN_SAFE_INTEGER;
    for (let x = 0; x < height.length; x++) {
        for (let y = x + 1; y < height.length; y++) {
            let area = Math.min(height[x], height[y]) * (y - x);
            maxResult = Math.max(maxResult, area);
        }
    }
    return maxResult; */
    // 左右收敛（移除不可能做为边界的数据），O(n)
    // 如果移动长板，面积一定小于原面积 
    // 如果移动短板，面积可能大于原面积 
    let x = 0, y = height.length - 1;
    let maxResult = 0;
    while ( x < y) {
        let area = (y - x) * (height[x] < height[y] ? height[x++] : height[y--]);
        maxResult = Math.max(maxResult, area);
    }
    return maxResult;
};
console.log(testCase);
console.log(maxArea(testCase));