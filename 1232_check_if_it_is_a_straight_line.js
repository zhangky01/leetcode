'use strict';
/**
 * 缀点成线
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    /**
     * 求斜率
     */
    if (coordinates.length === 2) return true;
    let gradient = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
    for (let i = 2; i < coordinates.length; i++) {
        const curGradient = (coordinates[i][1] - coordinates[0][1]) / (coordinates[i][0] - coordinates[0][0]);
        if (curGradient * -1 === gradient && gradient === Infinity) continue;
        if (gradient !== curGradient) return false;
    }
    return true;
};

// const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];  // true
// const coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];     // false
// const coordinates = [[1,2],[2,3],[3,5]];        // false
// const coordinates = [[0,0],[0,1],[0,-1]];           // true;
console.log(checkStraightLine(coordinates));