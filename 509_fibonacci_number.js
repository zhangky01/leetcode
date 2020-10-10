
let testCase = 6;
let result = 1;
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    // 递归 O(2^n)
    /* let f0 = 0, f1 = 1;
    if (N <= 1) return N;
    return fib(N - 1) + fib(N - 2); */

    // 自低向上 O(n)
    if (N < 2) return N;
    let pre1 = 0;
    let current = 1;
    for (let i = 2; i <= N; i++) {
        let temp = current;
        current = current + pre1;
        pre1 = temp;
    }
    return current;
};
console.log(testCase);
console.log(fib(testCase));