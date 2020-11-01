// const intervals = [[1,3],[2,6],[8,10],[15,18]];
// const intervals = [[1,3],[4,5]];
// const intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]];

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    /* if (intervals.length === 0) return intervals;
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    let res = [];
    intervals.push([Infinity, Infinity]);
    for (let i = 0; i < intervals.length - 1; i++) {
        let element = [intervals[i][0], intervals[i][1]];
        while (intervals[i][1] >= intervals[i + 1][0]) {
            element[1] = element[1] > intervals[i + 1][1] ? element[1] : intervals[i + 1][1];
            intervals[i + 1][1] = element[1];
            i++;
        }
        res.push(element);
    }
    return res; */
    if (intervals.length === 0) return intervals;
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    let res = [[intervals[0][0], intervals[0][1]]];
    for (let i = 1; i < intervals.length; i++) {
        if (res[res.length - 1][1] < intervals[i][0]) {
            res.push([intervals[i][0], intervals[i][1]]);
            continue;
        }
        if (res[res.length - 1][1] < intervals[i][1]) {
            res[res.length - 1][1] = intervals[i][1];
        }
    }
    return res;
};

console.log(merge(intervals));