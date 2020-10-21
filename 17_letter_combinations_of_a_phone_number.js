let testCase = "23";

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };
    
    let result = [];
    if (!digits.length) return result;
    helper(digits, 0, '');

    function helper(digits, index, str) {
        if (digits.length === index) {
            result.push(str);
            return;
        }
        let strs = map[digits[index]];
        for (let i = 0; i < strs.length; i++) {
            helper(digits, index + 1, str + strs[i]);
        }
    }
    return result;
};

console.log(letterCombinations(testCase));