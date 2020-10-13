let testCase = '{[]}';
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    /* let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
            continue;
        }
        if (s[i] === ')' && stack.pop() !== '(') return false;
        if (s[i] === ']' && stack.pop() !== '[') return false;
        if (s[i] === '}' && stack.pop() !== '{') return false;
    }
    if (stack.length === 0) return true;
    return false; */
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(')');
        } else if (s[i] === '[') {
            stack.push(']');
        } else if (s[i] === '{') {
            stack.push('}');
        } else if (stack.pop() !== s[i]) {
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid(testCase));