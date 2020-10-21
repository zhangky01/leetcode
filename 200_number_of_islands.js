let testCase = [["1","1","1"],["0","1","0"],["1","1","1"]];
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // 深度优先搜索
    let result = 0;
    if (!grid.length) return result;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] == 0) continue;
            result += slink(x, y);
        }
    }
    return result;


    function slink(x, y) {
        if (x == grid.length || x < 0 || y == grid[x].length || y < 0 || grid[x][y] == 0) return 0;
        grid[x][y] = 0;
        slink(x+1, y);
        slink(x-1, y);
        slink(x, y+1);
        slink(x, y-1);
        return 1;
    }
};

console.log(numIslands(testCase));