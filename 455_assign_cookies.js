let g = [1,2,3], s = [1,1]

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 贪新算法
    if (!g.length || !s.length) return 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let result = 0;
    let i = j = 0;
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            result++;
            i++;
            j++;
        } else {
            j++;
        }
    }
    return result;
};

console.log(findContentChildren(g, s));