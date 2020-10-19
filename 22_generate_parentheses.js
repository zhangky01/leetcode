const testCase = 3;

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    genParenthesis(0, 0, n, []);
    return result;
    function genParenthesis(left, right, max, str) {
        if (left === max && right === max) {
            result.push(str);
            return;
        }
        if (left < max) {
            genParenthesis(left + 1, right, max, str + '(');
        }
        if (right < left) {
            genParenthesis(left, right + 1, max, str + ')');
        }
    }
};

console.log(generateParenthesis(testCase));