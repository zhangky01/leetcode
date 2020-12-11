'use strict';
/**
 * Dota2 参议院
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    /**
     * 循环队列
     * 时间O(n),空间O(n)
     */
    let radiant = [], dire = [];
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }
    while (radiant.length && dire.length) {
        let radiantHeader = radiant.shift();
        let direHeader = dire.shift();
        if (radiantHeader < direHeader) {
            radiant.push(radiantHeader + senate.length);
        } else {
            dire.push(direHeader + senate.length);
        }
    }
    return radiant.length ? 'Radiant' : 'Dire';
};

// const senate = "RD";    // Radiant
const senate = 'RDD';      // Dire
console.log(predictPartyVictory(senate));