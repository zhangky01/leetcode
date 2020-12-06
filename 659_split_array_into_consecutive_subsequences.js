'use strict';

/**
 * 分割数组为连续子序列
 * @param {number[]} nums
 * @return {boolean}
 */

var isPossible = function(nums) {
    /**
     * 贪新算法：
     * 两个map，一个存储剩余次数，一个存储子序列的数量
     * 时间O(n),空间O(n)
     */
    let restCount = new Map();
    nums.forEach(o => {
        let count = restCount.get(o) ?? 0;
        restCount.set(o, count + 1);
    });
    let seqCount = new Map();
    for (let i = 0; i < nums.length; i++) {
        /**
         * 如果剩余个数为0，则直接循环下个数据
         * 否则：查看x-1连续序列是否存在
         *          存在：（x-1)序列减1，x序列加1，x数量减1
         *          不存在：查看x+1, x+2剩余数量是否大于1，
         *              存在x+2子序列+1，各个树数量减一
         *              不存在返回false
         */
        const curNum = nums[i], preNum = curNum - 1;
        let curNumCount = restCount.get(curNum);
        if (curNumCount < 1) continue;
        let preSeqCount = seqCount.get(preNum) ?? 0;
        let curSeqCount = seqCount.get(curNum) ?? 0;
        if (preSeqCount < 1) {
            const nextNum = curNum + 1, nextNextNum = nextNum + 1;
            let nextNumCount = restCount.get(nextNum) ?? 0;
            let nextNextNumCount = restCount.get(nextNextNum) ?? 0;
            if (nextNumCount < 1 || nextNextNumCount < 1) return false;
            const nextNextSeqCount = seqCount.get(nextNextNum) ?? 0;
            seqCount.set(nextNextNum, nextNextSeqCount + 1);
            restCount.set(curNum, curNumCount - 1);
            restCount.set(nextNum, nextNumCount - 1);
            restCount.set(nextNextNum, nextNextNumCount - 1);
        } else {
            seqCount.set(preNum, preSeqCount - 1);
            seqCount.set(curNum, curSeqCount + 1);
            restCount.set(curNum, curNumCount - 1);
        }
    }
    return true;
};

// const nums = [1,2,3,3,4,5];      // true
// const nums = [1,2,3,3,4,4,5,5];     // true
// const nums = [1,2,3,4,4,5];      // false
const nums = [4,5,6,7,7,8,8,9,10,11];    // true;
console.log(isPossible(nums));