let testCase = ['anagram', 'nagaram'];

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 1.暴力求解o(n^2)
    /* if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        t = t.replace(s[i], '');
    }
    return t == '' */

    // 2.借助hash O(n)
    if (s.length !== t.length) return false;
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) {
            hash[s[i]] = 1;
        } else {
            hash[s[i]]++;
        }
        if (hash[t[i]] === undefined) {
            hash[t[i]] = -1;
        } else {
            hash[t[i]]--;
        }
    }
    for (let s in hash) {
        if (hash[s] !== 0) return false;
    }
    return true;
};

console.log(isAnagram(testCase[0], testCase[1]));