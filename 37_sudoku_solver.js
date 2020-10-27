// result = true;
let testCase = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    /**
     * 1.遍历棋盘，分开已填和未填的数据
     * 2.遍历未填写的数据，递归回溯
     */
    let rows = [];
    let colums = [];
    let parts = [];
    for (let i = 0; i < board.length; i++) {
        rows[i] = new Set();
        colums[i] = new Set();
        parts[i] = new Set();
    }
    let empty = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '.') {
                empty.push([i, j]);
            } else {
                let thePartsIndex = Number.parseInt(i / 3) * 3 + Number.parseInt(j / 3);
                rows[i].add(board[i][j]);
                colums[j].add(board[i][j]);
                parts[thePartsIndex].add(board[i][j]);
            }
        }
    }
    helper(0);
    function helper(index) {
        if (index === empty.length) {
            return true;
        }
        let x = empty[index][0], y = empty[index][1];
        let thePartsIndex = Number.parseInt(x / 3) * 3 + Number.parseInt(y / 3);
        for (let i = 1; i <= 9; i++) {
            let theNum = String(i);
            if (rows[x].has(theNum) || colums[y].has(theNum) || parts[thePartsIndex].has(theNum)) {
                continue;
            }
            board[x][y] = theNum;
            rows[x].add(theNum);
            colums[y].add(theNum);
            parts[thePartsIndex].add(theNum);
            if (helper(index + 1)) return true;
            rows[x].delete(theNum);
            colums[y].delete(theNum);
            parts[thePartsIndex].delete(theNum);
        }
    }
};

console.log(solveSudoku(testCase));