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


let node3 = new TreeNode(3, null, null);
let node2 = new TreeNode(2, node3, null);
let testNode = new TreeNode(1, null, node2);


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];

    // 递归调用
    /* toString(root);
    function toString(root) {
        if (root) {
            toString(root.left);
            res.push(root.val);
            toString(root.right);
        }
    } */

    // 栈辅助
    /* let stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res; */

    // morris待补充
};

console.log(inorderTraversal(testNode));