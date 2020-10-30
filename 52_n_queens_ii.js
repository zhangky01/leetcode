const testCase = 4;

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    return dfs(n, 0, 0, 0, 0);

    // 位运算，空间复杂度降为O(1)
    function dfs(n, row, colums, pie, na) {
        if (n === row) return 1;
        let canSetPosition = (1 << n) - 1 & (~(colums | pie | na));
        let count = 0;
        while (canSetPosition !== 0) {
            let setPosition = canSetPosition & (-canSetPosition);
            count += dfs(n, row + 1, colums | setPosition, (pie | setPosition) >> 1, (na | setPosition) << 1);
            canSetPosition &= (canSetPosition - 1);
        }
        return count;
    }
};

console.log(totalNQueens(testCase));