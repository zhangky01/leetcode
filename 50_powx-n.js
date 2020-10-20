let testCase = [2.10000, 3];
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // 暴力递归，栈溢出；
    /* if (n === 0) {
        return 1;
    } else if (n > 0) {
        return x *  myPow(x, n - 1);
    } else {
        return (1 / x) * myPow(x, n + 1);
    } */

    // 暴力
    /* let sum = 1;
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            sum *= x;
        }
    } else if (n < 0) {
        for (let i = 0; i > n; i--) {
            sum *= (1 / x);
        }
    }
    return sum; */

    // 分治递归 空间复杂度O(logn)
/*     if (n == 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    return pow(x, n);

    function pow(x, n) {
        if (n === 0) return 1;
        let half = pow(x, Number.parseInt(n / 2));
        if (n % 2 == 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    } */
    // 分治法，空间复杂度O(1)
    if (n == 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let result = 1, base = x;
    while (n > 0) {
        if (n % 2 === 1) {
            result *= base;
        }
        base *= base;
        n = Number.parseInt(n / 2);
    }
    return result;
};

console.log(myPow(testCase[0], testCase[1]));