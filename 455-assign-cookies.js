'use strict';
/**
 * 分发饼干
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    /**
     * 贪心
     * 时间复杂度：O(mlogm+nlogn)
     * 空间复杂度：O(logm + logn)
     */
    if (g.length === 0 || s.length === 0) return 0;
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < s.length && count < g.length; i++) {
        if (g[count] <= s[i]) {
            count++;
        }
    }
    return count;
};

// const g = [1,2,3], s = [1,1];       // 1
// const g = [1,2], s = [1,2,3];       // 2
console.log(findContentChildren(g, s));