'use strict';
/**
 * 不同路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    /**
     * dp
     * f(1, y) = 1, f(x, 1) = 1;
     * f(x, y) = f(x - 1, y) + F(x, y - 1) 
     */
    let dp = new Array(m).fill([1]);
    dp[0] = new Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};

// const m = 3, n = 7;  // 28
// const m = 3, n = 2;     // 3
// const m = 3, n = 3;     // 6
console.log(uniquePaths(m, n));