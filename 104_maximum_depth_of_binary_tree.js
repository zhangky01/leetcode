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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // 找出最深层
    /* let res = -Infinity;
    helper(root, 1);
    return res;
    function helper(root, level) {
        if (root) {
            helper(root.left, level + 1);
            helper(root.right, level + 1);
        } else {
            res = level > res ? level - 1 : res;
        }
    } */

    return helper(root);
    function helper(root) {
        if (root) {
            let left = helper(root.left);
            let right = helper(root.right);
            return Math.max(left, right) + 1;
        } else {
            return 0;
        }
    }
};

console.log(maxDepth(testNode));