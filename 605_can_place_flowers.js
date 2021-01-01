/**
 * 种花问题
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    /**
     * 题解：
     * https://leetcode-cn.com/problems/can-place-flowers/solution/tan-xin-zan-bu-dong-ai-zhao-zai-jiu-xing-7hke/
     */
    if (n === 0) return true;
    for (let i = 0; i < flowerbed.length;) {
        const pre = flowerbed[i - 1] ?? 0, next = flowerbed[i + 1] ?? 0;
        if (flowerbed[i] === 0 && pre === 0 && next === 0) {
            flowerbed[i] = 1;
            n--;
            if (n === 0) return true;
        }
        flowerbed[i] === 1 ? i += 2 : i += 1;
    }
    return false;
};

// const flowerbed = [1,0,0,0,1], n = 1;   //  true
const flowerbed = [1,0,0,0,1], n = 2;    // false;
console.log(canPlaceFlowers(flowerbed, n));
