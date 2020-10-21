class TreeNode{
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const testCase = [3,9,20,null,null,15,7];

let node9 = new TreeNode(9, null, null);
let node15 = new TreeNode(15, null, null);
let node7 = new TreeNode(7, null, null);
let node20 = new TreeNode(20, node15, node7);
let testNode = new TreeNode(3, node9, node20);

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // BFS
/*     let level = 0;
    let result = [];
    let queue = [];
    if (root) {
        queue.push([root, level]);
    }
    while (queue.length) {
        let [node, level] = queue.shift();
        if (result[level]) {
            result[level].push(node.val);
        } else {
            result[level] = [node.val];
        }
        if (node.left) {
            queue.push([node.left, level + 1]);
        }
        if (node.right) {
            queue.push([node.right, level + 1]);
        }
    }
    return result; */

    // DFS
/*     let result = [];
    helper(root, 0);
    function helper(root, index) {
        if (root) {
            if (result[index]) {
                result[index].push(root.val);
            } else {
                result[index] = [root.val];
            }
            helper(root.left, index + 1);
            helper(root.right, index + 1);
        }
    }
    return result; */

    let result = [];
    let queue = [];
    if (root) {
        queue.push(root);
    }
    while (queue.length) {
        let currentLevelSize = queue.length;
        result.push([]);
        for (let i = 0; i < currentLevelSize; i++) {
            let node = queue.shift();
            result[result.length - 1].push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return result;
};

console.log(levelOrder(testNode));