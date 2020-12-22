'use strict';
/**
 * 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
    /**
     * BFS加deque加左右控制
     * 遍历，入队
     *      开关是false从左出队，true从右出队。
     *      每层全部出队，在入队
     * 时间复杂度：O(n)
     * 空间复杂度：O(n)
     */
/*     if (root == null) return [];
    let flag = false, deque = [root];
    let result = [];
    while (deque.length !== 0) {
        let tempDeque = [], stage = [];
        if (flag) {
            while (deque.length !== 0) {
                let treeNode = deque.pop();
                stage.push(treeNode.val);
                if (treeNode.right) {
                    tempDeque.unshift(treeNode.right);
                }
                if (treeNode.left) {
                    tempDeque.unshift(treeNode.left);
                }
            }
            flag = false;
        } else {
            while (deque.length !== 0) {
                let treeNode = deque.shift();
                stage.push(treeNode.val);
                if (treeNode.left) {
                    tempDeque.push(treeNode.left);
                }
                if (treeNode.right) {
                    tempDeque.push(treeNode.right);
                }
            }
            flag = true;
        }
        result.push(stage);
        deque = tempDeque;
    }
    return result; */

    /** 优化写法 */
    if (root == null) return [];
    let result = [], order = false;
    let deque = [root];
    while (deque.length) {
        const size = deque.length;
        let level = [];
        for (let i = 0; i < size; i++) {
            const treeNode = deque.shift();
            if (order) {
                level.unshift(treeNode.val);
            } else {
                level.push(treeNode.val);
            }
            if (treeNode.left) {
                deque.push(treeNode.left);
            }
            if (treeNode.right) {
                deque.push(treeNode.right);
            }
        }
        order = !order;
        result.push(level);
    }
    return result;
};

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
const treeNode15 = new TreeNode(15, null, null);
const treeNode7 = new TreeNode(7, null, null);
const treeNode20 = new TreeNode(20, treeNode15, treeNode7);
const treeNode9 = new TreeNode(9, null, null);
const root = new TreeNode(3, treeNode9, treeNode20);
console.log(zigzagLevelOrder(root));