'use strict';
/**
 * 字符串中的第一个唯一字符
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    /**
     * 使用哈希表存储频数
     * 时间复杂度: O(n)
     * 空间复杂度：O(n)
     */
    let hash = {};
    for (let char of s) {
        if (hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (hash[char] === 1) {
            return i;
        }
    }
    return -1;
};

// const s = "leetcode";       // 0;
// const s = "loveleetcode";
console.log(firstUniqChar(s));