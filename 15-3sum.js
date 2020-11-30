/**
 * 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    /**
     * 双指针
     * 时间复杂度O(n^2), 空间O(n)
     */
    // 1. 排序
    // 2. 遍历循环且不能等于前面一个数
    // 3. 找到b+c == -a
    // 4. 由于a+b+c = 0, b增加则c需要减小，即指针保证做left < right
    let result = [];
    nums = nums.sort((a, b) => a - b);
    for (let first = 0; first < nums.length - 2; first++) {
        if (nums[first] > 0) break;
        if (first > 0 && nums[first] === nums[first - 1]) continue;
        let target = -nums[first];
        let right = nums.length - 1;
        for (let left = first + 1; left < nums.length - 1; left++) {
            if (left > first + 1 && nums[left] === nums[left - 1]) continue;
            while (left < right && nums[left] + nums[right] > target) {
                right--;
                if (nums[right] < 0) break;
            }
            if (left === right) break;
            if (nums[left] + nums[right] === target) {
                result.push([nums[first], nums[left], nums[right]]);
            }
        }
    }
    return result;
};

const testCase = [-1, 0, 1, 2, -1, -4];
/* [
    [-1, 0, 1],
    [-1, -1, 2]
] */
console.log(threeSum(testCase));