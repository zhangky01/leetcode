'use strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 分隔链表
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    /**
     * 空间协助
     * 时间复杂度O(n),
     * 空间复杂度O(n)
     */
    let ltX = {next: null}, gtX = {next: null};
    let lastltX = ltX, lastgtY = gtX;
    while (head) {
        let node = new ListNode(head.val);
        if (head.val < x) {
            lastltX.next = node;
            lastltX = node;
        } else {
            lastgtY.next = node;
            lastgtY = node;
        }
        head = head.next;
    }
    lastltX.next = gtX.next;
    return ltX.next;
};

class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
    输入：head = 1->4->3->2->5->2, x = 3
    输出：1->2->2->4->3->5
 */
/* let node6 = new ListNode(2, null);
let node5 = new ListNode(5, node6);
let node4 = new ListNode(2, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(4, node3);
let head = new ListNode(1, node2);
let x = 3; */
let head = null, x = 3;
console.log(partition(head, x));