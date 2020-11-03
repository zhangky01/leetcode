// const testCase = "Hello";
const testCase = "LOVELY";

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    // return str.toLowerCase();
    let res = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt(0);
        if (charCode < 97 & charCode > 64) {
            res += String.fromCodePoint(charCode + 32);
        } else {
            res += str[i];
        }
    }
    return res;
};

console.log(toLowerCase(testCase));