/**
 * @param {number} capacity
 */
// 普通实现
/* var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
    this.array = [];
    this.get = function(key) {
        let result = this.map.get(key) || -1;
        this.moveFirst(key);
        return result;
    };
    this.moveFirst = function(key) {
        for (let i = this.array.length - 1; i > 0; i--) {
            if (this.array[i] !== key) continue;
            let temp = this.array[i];
            // [this.array[i - 1], this.array[i]] = [this.array[i], this.array[i - 1]];
            this.array[i] = this.array[i - 1];
            this.array[i - 1] = temp;
        }
    };

    this.put = function(key, value) {
        if (this.map.get(key) === undefined) {
            if (this.map.size === this.capacity) {
                let lastElement = this.array[this.capacity - 1];
                this.map.delete(lastElement);
                this.array.pop();
            }
            this.array.unshift(key);
        } else {
            this.moveFirst(key);
        }
        this.map.set(key, value);
    };
}; */


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache( 2 /* 缓存容量 */ );
/* cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4 */

console.log(cache.get(2));      // 返回 -1
cache.put(2, 6);
console.log(cache.get(1));      // 返回 -1
cache.put(1, 5);
cache.put(1, 2);
console.log(cache.get(1));      // 返回 2
console.log(cache.get(2));      // 返回 6