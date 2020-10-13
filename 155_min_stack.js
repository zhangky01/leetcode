/**
 * 1. 使用变量存储最小值，pop的时候如果是最小值，则重新查找最小值 pop O(n)
 * 2. 使用变量存储最小值，push的时候除了存储正常元素，同时存储当前栈中的最小值。所以栈顶元素肯定是栈的最小值。O(1), 空间复杂度O(n)。类似辅助栈
 * 3. 使用辅助栈存储最小值
 */

/**
 * initialize your data structure here.
 */
/* var MinStack = function() {
    this.stack = [];
    this.min = Number.MAX_SAFE_INTEGER;
}; */

var MinStack = function() {
    this.stack = [];
    this.minStack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
/* MinStack.prototype.push = function(x) {
    this.stack.push(x);
    this.min = x < this.min ? x : this.min;
}; */
/* MinStack.prototype.push = function(x) {
    this.min = x < this.min ? x : this.min;
    this.stack.push([x, this.min]);
} */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    this.minStack.push(this.minStack[this.minStack.length - 1] < x ? this.minStack[this.minStack.length - 1] : x);
}

/**
 * @return {void}
 */
/* MinStack.prototype.pop = function() {
    let pResult = this.stack.pop();
    if (this.min === pResult) {
        this.min = Number.MAX_SAFE_INTEGER;
        this.stack.forEach(o => this.min = this.min < o ? this.min : o);
    }
    return pResult;
}; */
/* MinStack.prototype.pop = function() {
    this.min = this.stack[this.stack.length - 2] && this.stack[this.stack.length - 2][1] || Number.MAX_SAFE_INTEGER;
    return this.stack.pop()[0];
}; */
MinStack.prototype.pop = function() {
    this.minStack.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
/* MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
}; */
/* MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
}; */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};


/**
 * @return {number}
 */
/* MinStack.prototype.getMin = function() {
    return this.min;
}; */
/* MinStack.prototype.getMin = function() {
    return this.min === Number.MAX_SAFE_INTEGER ? null : this.min;
}; */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};



/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());