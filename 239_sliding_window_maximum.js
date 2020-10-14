let testCase = [1,3,-1,-3,5,3,6,7];

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // 1. 暴力求解 两次循环
    /* let res = [];
    for (let i = 0; i <= nums.length - k; i++) {
        let max = -Infinity;
        for (let j = i; j < i + k; j++) {
            max = Math.max(max, nums[j]);
        }
        res.push(max);
    }
    return res; */

    // 2. 双端队列
    let len = nums.length;
    if( len < k|| k === 0){
        return [];
    }
    let queue = [];
    let res = [];
    for(let i = 0; i < k; i++){
        deque(queue, nums, i, k);
        queue.push(i);
    }
    res.push(nums[queue[0]]);
    for (let i = k; i < len; i++) {
        deque(queue, nums, i, k);
        queue.push(i);
        res.push(nums[queue[0]]);
    }
    return res;
};

function deque(queue, nums, idx, k) {
    // 如果双向队列中，包含不是滑动窗口内的数，直接出队
    if(queue.length && idx >= k + queue[0]){
        queue.shift();
    }
    // 如果当前的值大于对尾的值，则pop出对尾的值，因为pop出去的值，不会在向右滑窗时作为最大的值；
    while(queue.length && nums[idx] > nums[queue[queue.length-1]]){
        queue.pop();
    }
}

console.log(maxSlidingWindow(testCase, 3));