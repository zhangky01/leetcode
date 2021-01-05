/**
 * 较大分组的位置
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    /**
     * 题解：https://leetcode-cn.com/problems/positions-of-large-groups/solution/yi-ci-bian-li-ji-bai-100-by-_ky-c8ru/
     */
    let result = [];
    let size = 1, start = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            size++;
        } else {
            if (size > 2) result.push([start, start + size - 1]);
            start = i;
            size = 1;
        }
    }
    if (size > 2) result.push([start, start + size - 1]);
    return result;
};

// const s = "abbxxxxzzy"; // [[3,6]];
// const s = "abc";    // [];
// const s = "aba";    // [];
const s = "abcdddeeeeaabbbcd";  // [[3,5],[6,9],[12,14]];
// const s = 'aaa';    // [0, 2]
console.log(largeGroupPositions(s));