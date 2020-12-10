'use strict';

/**
 * 柠檬水找零
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    /**
     * 模拟贪心
     * 时间O(n),空间O(1)
     */
    let five = 0, ten = 0;
    for (let i = 0; i < bills.length; i++) {
        const bill = bills[i];
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            if (five === 0) return false;
            five--;
            ten++;
        } else {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
};

// const bills = [5,5,5,10,20];    // true;
// const bills = [5,5,10];     // true;
// const bills = [10,10];      // false
// const bills = [5,5,10,10,20];   // false
console.log(lemonadeChange(bills));