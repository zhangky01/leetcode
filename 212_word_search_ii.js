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
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    let trie = new Trie();
    words.forEach(o => trie.insert(o));
    let result = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            helper(i, j, '');
        }
    }
    return result;

    function helper(x, y, str) {
        let restore = board[x][y];
        str += board[x][y];
        if (trie.search(str) && !result.some(o => o === str)) {
            result.push(str);
        }

        if (!trie.startsWith(str)) {
            return
        };
        board[x][y] = '#';
        for (let i = 0; i < dx.length; i++) {
            let nextX = x + dx[i], nextY = y + dy[i];
            if (nextX < 0 || nextY < 0 || nextX === board.length || nextY === board[x].length || board[nextX][nextY] === '#') continue;
            helper(nextX, nextY, str);
        }
        board[x][y] = restore;
    }
};

// let board = [["a","a"]], words = ["a"];

let words = ["oath","pea","eat","rain"], board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
]; 

console.log(findWords(board, words));