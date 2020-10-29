const testCase = Number.parseInt('11111111111111111111111111111101', 2);
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    /* let count = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        if (n & mask) count++;
        mask <<= 1;
    }
    return count; */

    let result = 0;
    /* do {
        if (n & 1) result++;
        n = Number.parseInt(n / 2);
        // n >>>= 1;    // >> 有符号位右移， >>>无符号位右移
    } while (n !== 0);
    return result; */

    // x=x&(x-1)把x二级制最后一位1，变成0；
    /* let count = 0;
    while (n !== 0) {
        n &= (n - 1);
        count++;
    }
    return count; */
};

console.log(hammingWeight(testCase));