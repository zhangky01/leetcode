'use strict';
/**
 * 使用最小花费爬楼梯
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    /**
     *  base case:
     *      f(0) = 0, f(1) = 0;
     *  状态转移方程
     *      f(n) = Min(f(n - 1) + cost[n - 1], f(n - 2) + cost[n - 2]);
     *  时间复杂度：
     *      O(n)
     *  空间复杂度：
     *      O(n)
     */
    /* let dp = [0, 0];
    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[cost.length]; */

    // 空间压缩，只需要保存前两个即可
    let fpp = 0, fp = 0;
    for (let i = 2; i <= cost.length; i++) {
        let cur = Math.min(fpp + cost[i - 2], fp + cost[i - 1]);
        [fpp, fp] = [fp, cur];
    }
    return fp;
};

// const cost = [10, 15, 20];      // 15
const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];      // 6
console.log(minCostClimbingStairs(cost));