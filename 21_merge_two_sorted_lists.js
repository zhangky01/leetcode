'use strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    /**
     * pre存储前面一个节点
     * 时间：O(l1.size() * l2.size()), 空间O(1)
     */
    let result = {next: null};
    let pre = result;
   
    while (l1 && l2) {
        if (l1.value < l2.value) {
            pre.next = l1;
            l1 = l1.next;
        } else {
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    if (l1 == null) {
        pre.next = l2;
    } else {
        pre.next = l1;
    }
    return result.next;
};

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

let node41 = new Node(4, null);
let node42 = new Node(4, null);
let node2 = new Node(2, node41);
let node3 = new Node(3, node42);
let node11 = new Node(1, node2);
let node12 = new Node(1, node3)

console.log(mergeTwoLists(node11, node12));