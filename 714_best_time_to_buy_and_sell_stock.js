'use strict';
/**
 * 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /**
     * 暴力求解；
     * 时间O(n^2) 空间O(1)
     */
    // let result = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i; j < prices.length; j++) {
    //         result = Math.max(result, prices[j] - prices[i]);
    //     }
    // }
    // return result;

    /**
     * 假如低i天卖出股票，则例如最大肯定是0~i-1天的最小值
     * 时间O(n), 空间O(1)
     */
    let min = prices[0], result = 0;
    for (let i = 1; i < prices.length; i++) {
        result = Math.max(result, prices[i] - min);
        min = Math.min(min, prices[i])
    }
    return result;
};

// const prices = [7,1,5,3,6,4];   // 5
// const prices = [7,6,4,3,1];     // 0
console.log(maxProfit(prices));