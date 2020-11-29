/**
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /**
     * f(n) = f(n - 1) + f(n - 2)
     * f(1) = 1, f(2) = 2, f(3) = f(1) + f(2) = 3
     */
    // 超时， 时间复杂度O(2^k),递归调用栈O(n)
    // function help(n) {
    //     if (n < 3) return n;
    //     return help(n - 1) + help(n - 2);
    // }
    // return help(n);

    // 递归转迭代时间复杂度O(n), 空间复杂度O(1)
    if (n < 3) return n;
    let prepre = 1, pre = 2;
    for (let i = 3; i <= n; i++) {
        let cur = pre + prepre;
        prepre = pre;
        pre = cur;
    }
    return pre;
};

const testCase = 3;
console.log(climbStairs(testCase));
