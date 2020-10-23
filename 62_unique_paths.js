const m = 7, n = 3;

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    /**
     * baseCase  f(0, y - 1) = f(x + 1, y) = 1;
     * 状态转移方程：f(x, y) = f(x, y + 1) + f(x - 1, y);
     */
/*     if (m === 0 && n === 0) return 0;
    if (m === 0 || n === 0) return 1;
    let dbTable = genArray(m, n);
    for (let y = n - 2; y >= 0; y--) {
        for (let x = 1; x < m; x++) {
            dbTable[x][y] = dbTable[x - 1][y] + dbTable[x][y + 1];
        }
    }
    return dbTable[m - 1][0];

    function genArray(m, n) {
        let res = [];
        for (let i = 0; i <= m - 1; i++) {
            res[i] = [];
            res[i][n - 1] = 1;
        }
        for (let i = 0; i < n; i++) {
            res[0][i] = 1;
        }
        return res;
    } */

    // 优化，从0走到对角线,观察,每次只需要留当前行和前一行的数据即可
    // 空间复杂度O(n)
    let grid = [];
    for (let i = 0; i < n; i++) {
        grid[i] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[j] += grid[j - 1];
        }
    }
    return grid[n - 1];
};

console.log(uniquePaths(m, n));