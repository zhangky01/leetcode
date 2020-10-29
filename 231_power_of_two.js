let testCase = 4;

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // return n > 0 ? (n & n - 1) === 0 : false;
    // return n > 0 ? (n & -n) === n : false;
    if (n == 0) return false;
    while (n % 2 == 0) {
        n /= 2;
    }
    return n == 1;
};

console.log(isPowerOfTwo(testCase));