let testCase = new ListNode(5);

for (let i = 4; i >= 1; i--) {
    let temp = new ListNode(i);
    temp.next = testCase;
    testCase = temp;
}

testCase.next.next.next.next.next = testCase.next;

console.log(testCase);


function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param { } head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 为每次走过的节点进行标记，如果发现下个节点有标记，则存在环
    /* let result = false;
    let node = head;
    while(node != null) {
        if (node.flag) {
            result = true;
            return result;
        }
        node.flag = true;
        node = node.next;
    }
    return result; */

    // 快慢指针，如果快指针追上（等于）慢指针，则说明存在环
    if (!head || !head.next) return false;
    let slow = head;
    let fast = head.next;
    do {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next && fast.next.next || null;
    } while (fast) ;
    return false;
};

console.log(hasCycle(testCase));