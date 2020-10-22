let nums = [3,1], target = 1;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // O(n)
    /* if (target > nums[0]) {
        return nums.findIndex(o => o === target);
    } else {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] === target) return i;
        }
    }
    return  -1; */
    
    // O(logn)
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Number.parseInt(left + (right - left ) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] < nums[mid]) {
            if (target >= nums[left] && target <= nums[mid - 1]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target >= nums[mid + 1] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search(nums, target));