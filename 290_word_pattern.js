'use strict';

/**
 * 单词规律
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let hash = {}, strSet = new Set();
    let strs = s.split(' ');
    if (pattern.length !== strs.length) return false;
    for (let i = 0; i < strs.length; i++) {
        const pat = pattern[i], str = strs[i];
        const checkStr = hash[pat];
        if (checkStr === undefined && !strSet.has(str)) {
            hash[pat] = str;
            strSet.add(str);
        } else {
            if (hash[pat] !== str) return false;
        }
    }
    return true;

    /**
     * 哈希表
     * 时间O(n+m),空间O(n+m)
     */
/*     const word2ch = new Map();
    const ch2word = new Map();
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    for (const [i, word] of words.entries()) {
        const ch = pattern[i];
        if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
            return false;
        }
        word2ch.set(word, ch);
        ch2word.set(ch, word);
    }
    return true; */
};

// const pattern = "abba", str = "dog cat cat dog";    // true;
// const pattern = "abba", str = "dog cat cat fish";   // false;
// const pattern = "aaaa", str = "dog cat cat dog";        // false;
// const pattern = "abba", str = "dog dog dog dog";
console.log(wordPattern(pattern, str));