/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 两两交换链表中的节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    /**
     * 递归交换 O(n), 空间O(n)递归深度
     */
    /* if (head === null|| head.next === null) {
        return head;
    }
    let newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead; */

    /**
     * 使用前驱节点 保证每次循环能找到前驱节点
     * 时间O(n),空间O(1)
     */
    if (head === null || head.next === null) return head;
    let result = head.next;
    let pre = { value: 0, next: head };
    while (pre.next != null && pre.next.next != null) {
        let node2 = pre.next.next;
        let node1 = pre.next;
        pre.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        pre = node1;
    }
    return result;
};

class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
const head = [1,2,3,4];
const node4 = new ListNode(4, null);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
console.log(swapPairs(node1));