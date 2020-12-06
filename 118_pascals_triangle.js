'use strict';
/**
 * 杨辉三角
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    /**
     * 行列关系: (x, y) = (x - 1, y - 1) + (x - 1, y)
     * 时间O(n^2), 时间O(1);
     */
    if (numRows < 1) return [];
    let result = [[1]];
    for (let i = 1; i < numRows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            let v = (result[i - 1][j - 1] ?? 0) + (result[i - 1][j] ?? 0);
            row.push(v);
        }
        result.push(row);
    }
    return result;
};

console.log(generate(5));