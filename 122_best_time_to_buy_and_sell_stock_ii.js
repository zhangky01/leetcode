const testCase = [7,1,5,3,6,4];

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 贪新算法
    if (prices.length === 0) return 0;
    let result = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            result += (prices[i + 1] - prices[i])
        }
    }
    return result;
};

console.log(maxProfit(testCase));