let testNums = [2, 7, 11, 15];
let testTarget = 9;
let result = [0, 1];
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 暴力求解 O(n^2)
    /* let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
                return result;
            }
        }        
    } */

    // O(n) hash表法
    let result = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let negativeNumber = target - nums[i];
        if (map.has(negativeNumber)) {
            result.push(i, map.get(negativeNumber))
            return result;
        }
        map.set(nums[i], i);
    }
    return result;
};

console.log(twoSum(testNums, testTarget));