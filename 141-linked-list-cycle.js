/**
 * 环形链表
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    /**
     * 快慢指针
     * 时间O(n), 空间O(1)
     */
    let fast = head, slow = head;
    let result = false;
    while (fast) {
        fast = fast.next?.next;
        slow = slow.next;
        if (fast === slow) {
            result = true;
            break;
        }
    }
    return result;
};

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// head = [3,2,0,-4], pos = 1
/* let node4 = new Node(-4, null);
let node3 = new Node(0, node4);
let node2 = new Node(2, node3);
let node1 = new Node(3, node2);
node4.next = node2; */

// head = [1], post = -1
let node1 = new Node(1, null);
console.log(hasCycle(node1));