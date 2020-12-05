'use strict';
/**
 * 任务调度器
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    /**
     * 调度时间，取决于出现次数最多的任务。
     * (x - 1) * (n + 1) + 出现次数最多的任务数量
     */
    let taskMap = {};
    tasks.forEach(o => {
        taskMap[o] = taskMap[o] ? ++taskMap[o] : 1;
    });
    let tasksChars = Object.keys(taskMap).sort((a, b) => taskMap[b] - taskMap[a]);
    let result = (taskMap[tasksChars[0]] - 1) * (n + 1);
    let count = 1;
    for (let i = 1; i < tasksChars.length; i++) {
        if (taskMap[tasksChars[i]] === taskMap[tasksChars[i - 1]]) {
            count++;
            continue;
        }
        break;
    }
    result += count;
    return result < tasks.length ? tasks.length : result;
};

// const tasks = ["A","A","A","B","B","B"], n = 2;  // 8
// const tasks = ["A","A","A","B","B","B"], n = 0;    // 6
// const tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2;     // 16
console.log(leastInterval(tasks, n));