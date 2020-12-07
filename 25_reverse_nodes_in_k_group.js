'use strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 *  K 个一组翻转链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    /**
     * 反转链表
     * 把链表按k分组
     */
    let hair = {value: 0, next: head};
    let pre = hair;
    while (head) {
        let tail = pre;
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (tail == null) return hair.next;
        }
        let next = tail.next;
        [head, tail] = reverseList(head, tail);
        pre.next = head;
        tail.next = next;
        pre = tail;
        head = next;
    }
    return hair.next;

    function reverseList(head, tail) {
        let pre = null;
        let cur = head;
        while (pre !== tail) {
            let temp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = temp;
        }
        return [tail, head];
    }
};

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// head = 1->2->3->4->5, 
let node5 = new Node(5, null);
let node4 = new Node(4, node5);
let node3 = new Node(3, node4);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2);
console.log(reverseKGroup(node1, 2));