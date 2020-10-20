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

const testCase = [1,null,2,3];


/* let node1 = new TreeNode(1, null, null);
let node3 = new TreeNode(3, null, null);
let testNode = new TreeNode(2, node1, node3); */

let node3 = new TreeNode(3, null, null);
let node6 = new TreeNode(6, null, null);
let node4 = new TreeNode(4, node3, node6);
let node1 = new TreeNode(1, null, null);
let testNode = new TreeNode(5, node1, node4);

// let testNode = new TreeNode(0, null, null);

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 1. 先中序保存参数，然后判断数组参数大小
    /* let vals = [];
    loop(root);
    for (let i = 0; i < vals.length - 1; i++) {
        if (vals[i] >= vals[i + 1]) return false;
    }
    return true;
    function loop(root) {
        if (root) {
            loop(root.left);
            vals.push(root.val);
            loop(root = root.right);
        }
    } */

    // 2. 递归升级
    return helper(root, -Infinity, Infinity);

    function helper(root, lower, upper) {
        if (root == null) return true;

        if (root.val <= lower || root.val >= upper) return false;

        return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
    }
};

console.log(isValidBST(testNode));