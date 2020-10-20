let testCase = nums = [1,2,3];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    // 回溯法
    /*let result = [];
    helper([], 0);
    return result;
    function helper(arr, index) {
        if (index === nums.length) {
            result.push(arr);
            return;
        }
        helper(arr.concat(), index + 1);
        arr.push(nums[index]);
        helper(arr.concat(), index + 1);
    } */

    // 迭代法位运算
    let result = [];
    for (let i = 0; i < (1 << nums.length); i++) {
        let temp = [];
        for (let j = 0; j < nums.length; j++) {
            if (i & (1 << j)) {
                temp.push(nums[j]);
            }
        }
        result.push(temp);
    }
    return result;
};
console.log(subsets(testCase));