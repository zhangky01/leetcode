let testCase = 3;
let result = 3;
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 实际是斐波那契数 O(n)
    if (n < 3) return n;
    let current = 2;
    let pre1 = 1;
    for (let i = 2; i < n; i++) {
        let temp = current;
        current = pre1 + current;
        pre1 = temp;
    }
    return current;
};

console.log(testCase);
console.log(climbStairs(testCase));