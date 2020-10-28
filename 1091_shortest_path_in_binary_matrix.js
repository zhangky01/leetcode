let testCase = [[0,1,0,1,0,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0],[1,0,0,0,1,1,1,0],[0,1,0,0,1,0,1,0],[1,1,0,0,0,0,0,0],[0,0,1,1,0,1,0,0],[1,0,0,0,0,1,1,0]];
/* let testCase = [
    [0,0,0,0,1,1],
    [0,1,0,0,1,0],
    [1,1,0,1,0,0],
    [0,1,0,0,1,1],
    [0,1,0,0,0,1],
    [0,0,1,0,0,0]
]; */
// result = 2;
// let testCase = [[0,1],[1,0]];
// result = 4;
// let testCase = [[0,0,0],[1,1,0],[1,1,0]];
// 优先队列，使用曼哈顿距离
// 基于堆的优先队列
class PriorityQueue {
    queue = [[0, 0, 0]];
    target;
    dequeue(){
        let result = this.queue[1];
        this.queue[1] = this.queue[this.queue.length - 1];
        this.sink(1);
        this.queue.pop();
        return result;
    }

    enqueue(element){
        this.queue.push(element);
        this.swim(this.queue.length - 1);
    }

    swim(index) {
        let parent = Number.parseInt(index / 2);
        while (index > 1 && this.compare(parent, index, this.target)) {
            this.exchange(parent, index);
            index = parent;
            parent = Number.parseInt(index / 2);
        }
    }

    sink(index) {
        while (2 * index <= this.size()) {
            let pick = index * 2;
            if (pick + 1 < this.size && this.compare(pick, pick + 1)) pick++;
            if (!this.compare(index, pick)) break;
            this.exchange(index, pick);
            index = pick;
        }
    }

    exchange(a, b) {
        let temp = this.queue[a];
        this.queue[a] = this.queue[b];
        this.queue[b] = temp;
    }

    size() {
        return this.queue.length - 1;
    }

    // 估价函数
    compare(a, b) {
        let mhDistA = Math.max(Math.abs((this.target[0] - this.queue[a][0])), Math.abs((this.target[1] - this.queue[a][1]))) + this.queue[a][2];
        let mhDistB = Math.max(Math.abs((this.target[0] - this.queue[b][0])), Math.abs((this.target[1] - this.queue[b][1]))) + this.queue[b][2];
        return mhDistA > mhDistB;
    }

    setTarget(target) {
        this.target = target;
    }
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let dx = [0, 0, 1, 1, 1, -1, -1, -1];
    let dy = [1, -1, 0, 1, -1, 0, 1, -1];

    
    // 估价函数待取
    /* let queue = new PriorityQueue();
    if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return -1;
    if (grid.length === 1) return 1;
    queue.enqueue([0, 0, 1]);           // [x, y, step]
    queue.setTarget([grid.length - 1, grid.length - 1]);
    let visited = new Set();
    visited.add('(0,0)');
    while (queue.size() !== 0) {
        let [x, y, step] = queue.dequeue();
        for (let i = 0; i < dx.length; i++) {
            let newX = x + dx[i], newY = y + dy[i];

            if (newX < 0 || newY < 0 || newX == grid.length || newY == grid.length) continue;

            if (grid[newX][newY] === 1) continue;

            if (newX === grid.length - 1 && newY === grid[newX].length - 1) return step + 1;

            let visitedString = `(${newX},${newY})`;
            if (!visited.has(visitedString)) {
                queue.enqueue([newX, newY, step + 1]);
                visited.add(visitedString);
            }
        }
    }
    return -1; */
    if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return -1;
    if (grid.length === 1) return 1;
    let queue = [];
    queue.push([0, 0, 1]);
    let visited = new Set();
    visited.add('(0,0)');
    while (queue.length > 0) {
        let [x, y, step] = queue.shift();
        for (let i = 0; i < dx.length; i++) {
            let newX = x + dx[i], newY = y + dy[i];

            if (newX < 0 || newY < 0 || newX == grid.length || newY == grid.length) continue;

            if (grid[newX][newY] === 1) continue;

            if (newX === grid.length - 1 && newY === grid[newX].length - 1) return step + 1;

            let visitedString = `(${newX},${newY})`;
            if (!visited.has(visitedString)) {
                queue.push([newX, newY, step + 1]);
                visited.add(visitedString);
            }
        }
    }
    return -1;
};

console.log(shortestPathBinaryMatrix(testCase));