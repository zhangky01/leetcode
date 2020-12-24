'use strict';
/**
 * 分发糖果
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    /**
     * 相邻最大，两遍遍历
     * 同时满足左规则和右规则
     * 时间复杂度O(n)
     * 空间复杂度O(n)
     */
    let left = new Array(ratings.length).fill(0);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
    }
    let sum = 0, right = 0;
    for (let i = ratings.length - 1; i >= 0; i--) {
        if (i < ratings.length - 1 && ratings[i] > ratings[i + 1]) {
            right += 1;
        } else {
            right = 0;
        }
        sum += Math.max(left[i], right);
    }
    return sum + ratings.length;
};

// const ratings = [1,0,2];    // 5;
// const ratings = [1,2,2];    // 4;
// const ratings = [1,3,2,2,1];    // 7
const ratings = [1,2,87,87,87,2,1]; //13
console.log(candy(ratings));