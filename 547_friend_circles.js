class UnionFind {
    id = [];
    count = 0;

    constructor(n) {
        this.makeSet(n);
    }

    makeSet(n) {
        for (let i = 0; i < n; i++) {
            this.id[i] = i;
        }
        this.count = n;
        return this.id;
    }

    find(element) {
        while (element !== this.id[element]) {
            this.id[element] = this.id[this.id[element]];
            element = this.id[this.id[element]];
        }
        return element;
    }

    union(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if (rootP === rootQ) return;
        this.id[rootQ] = rootP;
        this.count--;
    }
}

/* let testCase = [
    [1,1,0],
    [1,1,0],
    [0,0,1]
]; */

let testCase = [
    [1,1,0],
    [1,1,1],
    [0,1,1]
];

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    if (M.length === 0) return 0;
    let disjointSet = new UnionFind(M.length);
    for (let i = 0; i < M.length; i++) {
        for (let j = i; j < M[i].length; j++) {
            if (M[i][j]) {
                disjointSet.union(i, j);
            }
        }
    }
    return disjointSet.count;
};

console.log(findCircleNum(testCase));