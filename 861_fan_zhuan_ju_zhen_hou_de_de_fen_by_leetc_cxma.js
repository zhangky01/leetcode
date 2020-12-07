'use strict';
/**
 * 反转矩阵后的得分
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    /**
     * 贪心
     * 首列反转为1，其余列看0的个数
     * 时间O(mn),空间O(1)
     */
    let m = A.length, n = A[0].length;
    let result = m * (1 << (n - 1));
    for (let j = 1; j < n; j++) {
        let oneCount = 0;
        for (let i = 0; i < m; i++) {
            if (A[i][0] === 1) {
                oneCount += A[i][j];
            } else {
                oneCount += (1 - A[i][j]);
            }
        }
        let k = Math.max(oneCount, (m - oneCount));
        result += k * (1 << (n - 1 - j));
    }
    return result;
};

const A = [[0,0,1,1],[1,0,1,0],[1,1,0,0]];
console.log(matrixScore(A));