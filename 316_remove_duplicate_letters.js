'use strict';
/**
 * 去除重复字母
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    /**
     * 单调栈：保存最小字典序数据
     * 每个字符出现次数：用于判断后面还有没有这个字符
     * 时间O(n), 空间O(n)
     */
    /**
     * 统计某个字符出现的次数
     * 遍历：
     *      在栈中是否出现？如果出现，则跳过。
     *      如果没有：
     *          看待当前元素和栈顶元素大小
     *              如果当前元素大直接入栈
     *              如果小，则判断栈顶元素是否在后面还有
     *                  如果有则删除，继续判断
     *                  如果没有直接进栈
     */
    let countMap = {};
    for (let char of s) {
        if (countMap[char] === undefined) {
            countMap[char] = 1;
        } else {
            countMap[char]++;
        }
    }
    let visitedMap = {};
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!visitedMap[char]) {
            while (stack.length > 0 && stack[stack.length - 1] > char && countMap[stack[stack.length - 1]] > 0) {
                visitedMap[stack[stack.length - 1]] = false;
                stack.pop();
            }
            stack.push(char);
            visitedMap[char] = true;
        }
        countMap[char]--;
    }

    return stack.join('');
};

// const s = "bcabc";  // 'abc'
const s = "cbacdcbc";   // 'acdb'
console.log(removeDuplicateLetters(s));