let testCase = 0;
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // 1.生成棋盘
    // >    如何生成，二层循环，生成棋盘
    // 2.置放位置（由上到下）
    // >    如果放置？检查是否有攻击，如果没有相应位置置成Q，如果有跳过选择。如果当前行选择完毕，上层棋盘位置往后挪1
    // >            如何检查攻击？（捺 x+y  撇x-y）行不用考虑，列从上一层位置[+1 -> n]
    // >    当n放完，检查满足条件，计入结果。不满足跳过回溯。
    let result = [];
    let qiPan = genQiPan(n);
    let pie = new Set(), na = new Set(), shu = new Set();
    helper(0);
    return result;

    function helper(index) {
        if (index === n) {
            let temp = qiPan.map(o => (o.join('')));
            result.push(temp);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (pie.has(index - i) || na.has(index + i) || shu.has(i)) {
                continue;
            }

            qiPan[index][i] = 'Q';

            pie.add(index - i);
            na.add(index + i);
            shu.add(i);

            helper(index + 1);

            pie.delete(index - i);
            na.delete(index + i);
            shu.delete(i);
            qiPan[index][i] = '.';
        }
    }


    function genQiPan(n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            let column = [];
            for (let j = 0; j < n; j++) {
                column.push('.');
            }
            result.push(column);
        }
        return result;
    }
};

console.log(solveNQueens(testCase));