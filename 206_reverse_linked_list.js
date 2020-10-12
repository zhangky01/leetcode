let testCase = new ListNode(5);

for (let i = 4; i >= 1; i--) {
    let temp = new ListNode(i);
    temp.next = testCase;
    testCase = temp;
}

console.log(testCase);


function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 每次声明一个新的节点，指向旧的节点。
    /* let res = new ListNode(head.val);
    let node = head.next;
    while (node) {
        let temp = new ListNode(node.val);
        temp.next = res;
        res = temp;
        node = node.next;
    }
    return res; */

    // 双指针；
    /* let res = null;
    let node = head;
    while (node) {
        let temp = node.next;
        node.next = res;
        res = node;
        node = temp;
    }
    return res; */
    if (head === null || head.next === null) return head;
    let res = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
};


console.log(reverseList(testCase));
