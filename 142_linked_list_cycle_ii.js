'use strict';

/**
 * 环形链表II
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    /**
     * 标记法，进入的节点打上标记，
     * 快慢指针判断是否存在环
     * 时间O(n),空间O(1)
     */
    let result = null; 
    if (head == null || head.next == null) return result;
    let slow = head, fast = head;
    while (fast) {
        slow = slow.next;
        fast = fast.next?.next;
        if (slow === fast) {
            let temp = head;
            while (temp !== slow) {
                slow = slow.next;
                temp = temp.next;
            }
            result = temp;
            break;
        }
    }
    return result;
    
    /**
     * 哈希表法
     * 时间O(n) 空间O(n)
     */
    /* let result = null;
    let nodeSet = new Set();
    while (head) {
        if (nodeSet.has(head)) {
            return head;
        }
        nodeSet.add(head);
        head = head?.next;
    }
    return result; */
};

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// head = [3,2,0,-4], pos = 1
let node4 = new Node(-4, null);
let node3 = new Node(0, node4);
let node2 = new Node(2, node3);
let node1 = new Node(3, node2);
node4.next = node2;

// head = [1], post = -1
// let node1 = new Node(1, null);
console.log(detectCycle(node1));