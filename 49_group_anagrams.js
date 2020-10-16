let testCase = ["eat", "tea", "tan", "ate", "nat", "bat"];

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 1.暴力法 O(n^3)
    /* let res = [];
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        let findResult = res.findIndex(o => isAnagrams(o[0], str));
        if (findResult === -1) {
            res.push([str]);
        } else {
            res[findResult].push(str);
        }
    }
    return res; */
    
    // 2.排序方法(O(n * klogk))
    if (!Array.isArray(strs) || strs.length === 0) return [];
    let res = [];
    let hash = {};
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        let sortStr = strSort(str);
        if (hash[sortStr]) {
            hash[sortStr].push(str);
        } else {
            hash[sortStr] = [str];
        }
    }
    for (let key in hash) {
        res.push(hash[key]);
    }
    return res;

    // 3.计数法，和排序法类似。异位词，每个字母出现的次数一致。用一个26位数组，记录各个字母出现频次。然后组合出字符串
    //      类似3,1,2  用作hash的key
};

function strSort(str) {
    return toCharArray(str).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
}

function toCharArray(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        res.push(str[i]);
    }
    return res;
}

function isAnagrams(a, b) {
    if (a.length !== b.length) return false;
    let hash = {};
    for (let i = 0; i < a.length; i++) {
        const charA = a[i];
        if (hash[a[i]] === undefined) {
            hash[a[i]] = 1;
        } else {
            hash[a[i]]++;
        }
        if (hash[b[i]] === undefined) {
            hash[b[i]] = -1;
        } else {
            hash[b[i]]--;
        }
    }
    for (let key in hash) {
        if (hash[key] !== 0) return false;
    }
    return true;
}

console.log(groupAnagrams(testCase));