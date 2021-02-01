'use strict';
/**
 * 888. 公平的糖果棒交换
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
/*     for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            [A[i], B[j]] = [B[j], A[i]];
            if (_sum(A) === _sum(B)) return [B[j], A[i]];
            [A[i], B[j]] = [B[j], A[i]];
        }
    }
    return [0, 0]; */

    let Asum = _sum(A);
    let Bsum = _sum(B);
    let mid = (Asum + Bsum) / 2;

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (B[j] - A[i] + Asum === mid) return [A[i], B[j]]
        }
    }
    return [0, 0];
    function _sum(arr) {
        return arr.reduce((pre, cur) => pre + cur, 0);
    }
};

const A = [1,1], B = [2,2];   // [1,2]
// const A = [1,2], B = [2,3];      // [1,2]
// const A = [2], B = [1,3];        // [2,3]
// const A = [1,2,5], B = [2,4]     // [5,4]
console.log(fairCandySwap(A, B));