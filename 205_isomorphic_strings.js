'use strict';
/**
 * 同构字符串
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    /**
     * 哈希表，存储字符和下表映射。
     * 时间复杂度O(n),
     * 空间复杂度O(∣Σ∣)
     */
    let charIndexS = {}, charIndexT = {};
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i], tChar = t[i];
        const sIndex = charIndexS[sChar], tIndex = charIndexT[tChar];
        if (sIndex !== tIndex) return false;
        if (sIndex === undefined) {
            charIndexS[sChar] = i;
            charIndexT[tChar] = i;
        }
    }
    return true;
};

const s = "egg", t = "add";     // true;
// const s = "foo", t = "bar";     // false;
// const s = "paper", t = "title"; // true;
console.log(isIsomorphic(s, t));