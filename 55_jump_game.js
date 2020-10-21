let testCase = [1,2,3];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 贪心
    /* if (nums.length === 0) return false;
    let maxPosition = nums[0];
    for (let i = 0; i <= maxPosition; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]);
        if (maxPosition >= nums.length - 1) return true;
    }
    return false; */

    // 逆向思维
    if (nums.length === 0) return false;
    let endIndex = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= endIndex) {
            endIndex = i;
        }
    }
    return endIndex === 0;
};

console.log(canJump(testCase));