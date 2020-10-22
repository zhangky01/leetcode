let testCase = 19;

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    /* let left = 0, right = Number.parseInt((x / 2) + 1);
    while (left <= right) {
        let mid = Number.parseInt((left + right) / 2);
        let pow2 = Math.pow(mid, 2);
        if (pow2 == x) return mid;
        if (pow2 < x) {
            if (Math.pow(mid + 1, 2) > x) return mid;
            left = left + 1;
        } else {
            right = mid - 1;
        }
    } */
    /* let result = -1, left = 0, right = x;
    while (left <= right) {
        let mid = Number.parseInt(left + (right - left) / 2);
        if (mid * mid <= x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result; */
    
    // 牛顿迭代法
    let result = x;
    while (result * result > x) {
        result = Number.parseInt((result + x / result) / 2);
    }
    return result;
};

console.log(mySqrt(testCase));