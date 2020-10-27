// 5
// const beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"];
// 0
// const beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"];
const beginWord = 'a', endWord = 'c', wordList = ["a", "b", "c"];
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // 预处理+BFS
    /**
     * 预处理：dig => d*g <= dog
     * BFS搜索
     */
/*     let allComboDict = new Map();
    wordList.forEach(o => {
        for (let i = 0; i < o.length; i++) {
            let newWord = o.substring(0, i) + '*' + o.substring(i + 1, o.length);
            let transformations = allComboDict.get(newWord) || [];
            transformations.push(o);
            allComboDict.set(newWord, transformations);
        }
    });
    
    let queue = [[beginWord, 1]];
    let visisted = new Set();
    visisted.add(beginWord);
    while (queue.length !== 0) {
        let [word, level] = queue.shift();
        for (let i = 0; i < word.length; i++) {
            let newWord = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
            let transformations = allComboDict.get(newWord) || [];
            for (let j = 0; j < transformations.length; j++) {
                if (transformations[j] === endWord) {
                    return level + 1;
                }
                if (visisted.has(transformations[j])) continue;
                queue.push([transformations[j], level + 1]);
                visisted.add(transformations[j]);
            }
        }
    }
    return 0; */

    /**
     * 双向BFS
     * 如果在两端的visited同时出现，则说明相交
     */
    if (wordList.length === 0 || wordList.every(o => o !== endWord)) {
        return 0;
    }
    let allComboDict = new Map();
    wordList.forEach(o => {
        for (let i = 0; i < o.length; i++) {
            let newWord = o.substring(0, i) + '*' + o.substring(i + 1, o.length);
            let transformations = allComboDict.get(newWord) || [];
            transformations.push(o);
            allComboDict.set(newWord, transformations);
        }
    });
    let startQueue = [beginWord];
    let endQueue = [endWord];
    let step = 1;
    let startVisisted = new Set();
    let endVisisted = new Set();
    startVisisted.add(beginWord);
    endVisisted.add(endWord);
    while (startQueue.length !== 0 && endQueue.length !== 0) {
        let userQueue = startQueue, visisted = startVisisted, otherVisited = endVisisted;
        if (startQueue.length > endQueue.length) {
            userQueue = endQueue;
            visisted = endVisisted;
            otherVisited = startVisisted;
        };
        let useQueueLength = userQueue.length;
        for (let q = 0; q < useQueueLength; q++) {
            let word = userQueue.shift();
            for (let i = 0; i < word.length; i++) {
                let newWord = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
                let transformations = allComboDict.get(newWord) || [];
                for (let j = 0; j < transformations.length; j++) {
                    if (otherVisited.has(transformations[j])) {
                        return step + 1;
                    }
                    if (!visisted.has(transformations[j])) {
                        userQueue.push(transformations[j]);
                        visisted.add(transformations[j]);
                    }
                }
            }
        }
        step++;
    }
    return 0;
};

console.log(ladderLength(beginWord, endWord, wordList));