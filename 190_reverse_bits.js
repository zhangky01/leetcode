const testCase = 43261596;
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    /* let str = n.toString(2);
    str = '00000000000000000000000000000000'.slice(0, 32 - str.length) + str;
    let reverseStr = new Array(...str).reverse().join('');
    return Number.parseInt(reverseStr, 2); */
    /* 
    // 逐位颠倒
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) + (n & 1);
        n = n >> 1;
    }
    return result >>> 0; */
    /* let result = 0, offset = 31;
    while (n !== 0) {
        result += (n & 1) << offset;
        n = n >> 1;
        offset--;
    }
    return result; */
};

console.log(reverseBits(testCase));