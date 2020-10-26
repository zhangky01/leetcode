/* 
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
]; */

// result = false;
let testCase = [
      ["8","3",".",".","7",".",".",".","."],
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
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    /**
     * 9行 set
     * 9列 set
     * 9个方块 （行 / 3）* 3 + 列 / 3
    */
    let rows = [];
    let colums = [];
    let parts = [];
    
    for (let i = 0; i < board.length; i++) {
        rows[i] = new Set();
        colums[i] = new Set();
        parts[i] = new Set();
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let theNum = board[i][j];
            if (theNum === '.') continue;
            let thePartsIndex = Number.parseInt(i / 3) * 3 + Number.parseInt(j / 3);
            if (rows[i].has(theNum) || colums[j].has(theNum) || parts[thePartsIndex].has(theNum)) {
                return false;
            }
            rows[i].add(theNum);
            colums[j].add(theNum);
            parts[thePartsIndex].add(theNum);
        }
    }
    return true;
};

console.log(isValidSudoku(testCase));