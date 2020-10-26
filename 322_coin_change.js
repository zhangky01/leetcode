// let coins = [1, 2, 5], amount = 11;
// let coins = [2], amount = 3;
// let coins = [1], amount = 0;
let coins = [186,419,83,408], amount = 6249;
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 1.伪贪心，暴力递归+剪枝
/*     coins = coins.sort((a, b) => b - a);
    let res = Infinity;
    helper(amount, 0, 0);
    return res == Infinity ? -1 : res;

    function helper(c_amount, c_index, count) {
        if (c_amount === 0) {
            res = Math.min(res, count);
            return;
        }
        if (c_index >= coins.length) return;
        for (let k = Number.parseInt(c_amount / coins[c_index]); k >= 0 && k + count < res; k--) {
            helper(c_amount - k * coins[c_index], c_index + 1, count + k);
        }
    } */

    /**
     * 动态规划
     * baseCase f(0) = 0, f(coin[0]) = 1; 
     * f(amount) = Math.min(f(amount - coin[0]) + 1, f(amount - coin[1]) + 1, ....);
     */
    let dp = [0];
    for (let i = 1; i < amount + 1; i++) {
        dp[i] = Infinity;
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] < 0) continue;
            dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange(coins, amount));