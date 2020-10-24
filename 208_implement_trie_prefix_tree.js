/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.trieNode = [];
    this.isEnd = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let trie = this;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let index = char.charCodeAt() - 97;
        if (trie.trieNode[index] === undefined) {
            trie.trieNode[index] = new Trie();
        }
        trie = trie.trieNode[index];
    }
    trie.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let trie = this;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let index = char.charCodeAt() - 97;
        trie = trie.trieNode[index];
        if (trie === undefined) return false;
    }
    return trie.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let trie = this;
    for (let i = 0; i < prefix.length; i++) {
        let char = prefix[i];
        let index = char.charCodeAt() - 97;
        trie = trie.trieNode[index];
        if (trie === undefined) return false;
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let obj = new Trie();
obj.insert('word');
console.log(obj.search('11'));
console.log(obj.startsWith('w'));