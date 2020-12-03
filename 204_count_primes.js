'use strict';

/**
 * 计数质数
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    /**
     * 边界条件：<2等于0;
     * 空间O(1), 时间O(n^2)； 超时
     */
    /* if (n < 2) return 0;
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (checkPrimes(i)) count++;
    }
    return count;

    function checkPrimes(n) {
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }*/

    /**
     * 埃氏筛
     * 如果一个数是质数，则他的倍数肯定不是质数
     * 空间O(n), 时间O(nlogn)
     */
    let set = new Set();    // 存合数
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!set.has(i)) {
            count++;
            for (let j = i * i; j < n; j += i) {
                set.add(j);
            }
        }
    }
    return count;
    
};

console.log(countPrimes(10));   // result => 4