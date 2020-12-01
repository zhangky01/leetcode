/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    /**
     * 左右指针夹逼，
     * 时间O(n)，空间O(n)
     */
/*     let result = [-1, -1];
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (nums[left] === target) {
            result[0] = left;
            break;
        } 
        left++;
    }
    if (result[0] === -1) return result;
    while (right >= left) {
        if (nums[right] === target) {
            result[1] = right;
            break;
        }
        right--;
    }
    return result; */
    
    /**
     * 二分查找
     * target第一个出现的位置，其实就是mid >= target的位置
     * target最后一个出现的位置，则是 >target的位置-1
     * 时间O(logn), 空间O(1)
     */
    let result = [-1, -1];
    let left = binarySearch(nums, target, true);
    let right = binarySearch(nums, target, false) - 1;
    if (nums[left] === nums[right] && nums[left] === target) {
        result = [left, right];
    }
    return result;
    
    function binarySearch(nums, target, pickLower) {
        let left = 0, right = nums.length - 1, result = nums.length;
        while (left <= right) {
            let mid = left + Math.trunc((right - left) / 2);
            let cond = pickLower ? nums[mid] >= target : nums[mid] > target;
            if (cond) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return result;
    }
};

const nums = [5,7,7,8,8,10], target = 8;     // [3, 4]
// const nums = [], target = 0;        // [-1, -1]
// const nums = [5,7,7,8,8,10], target = 6;     // [-1. -1]
console.log(searchRange(nums, target));     