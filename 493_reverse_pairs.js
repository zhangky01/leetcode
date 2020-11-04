// let testCase = [1,3,2,3,1];
let testCase = [2,4,3,5,1];

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    /* 
    // 超出时限
    if (nums.length <= 1) return 0;
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let curElement = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (curElement / 2 > nums[j]) count++;
        }
    }
    return count; */

    // 归并实现求反转对
    let count = 0;

    mergeSort(0, nums.length - 1);

    return count;
    
    function mergeSort(left, right) {
        if (right <= left) return;
        let mid = Math.floor((left + right) / 2);
        mergeSort(left, mid);
        mergeSort(mid + 1, right);
        for (let i = left, j = mid + 1; i <= mid; i++) {
            while (j <= right && nums[i] / 2 > nums[j]) j++;
            count += (j - mid - 1);
        }
        merge(nums, left, mid, right);
    }

    function merge(array, left, mid, right) {
        let temp = [];
        let leftStart = left, index = 0, rightStart = mid + 1;
        
        while (leftStart <= mid && rightStart <= right) {
            if (array[leftStart] <= array[rightStart]) {
                temp[index++] = array[leftStart++];
            } else {
                temp[index++] = array[rightStart++];
            }
        }

        while (leftStart <= mid) {
            temp[index++] = array[leftStart++];
        }

        while (rightStart <= right) {
            temp[index++] = array[rightStart++];
        }
        
        for (let i = 0; i < temp.length; i++) {
            array[left + i] = temp[i];
        }
    }
};

console.log(reversePairs(testCase));