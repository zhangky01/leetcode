'use strict';
/**
 * 单调递增的数字
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    /**
     * 贪心
     * 时间O(logn),空间O(logn)
     */
    let charArray = N.toString().split('').map(o => +o);
    let i = 1;
    while (charArray[i - 1] <= charArray[i]) {
        i++;
    }
    if (i === charArray.length) return charArray.join('');
    while (charArray[i - 1] > charArray[i]) {
        charArray[i - 1] = charArray[i - 1] - 1;
        for (let j = i; j < charArray.length; j++) {
            charArray[j] = 9;
        }
        i--;
    }
    return Number.parseInt(charArray.join(''));
};

// const N = 10;   // 10
// const N = 1234; // 1234
// const N = 332;  // 299
const N = 100;
console.log(monotoneIncreasingDigits(N));