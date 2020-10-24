let text1 = "abcde", text2 = "ace";
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    /**
     * DP
     * if(t1[t1.length - 1] == t2[t2.length - 1])
     *      f(t1, t2) = f(t1.length - 1, t2.length - 1) + 1;
     * else
     *      f(t1, t2) = Math.max((t1.length - 1, t2), (t1, t2.length - 1))
     * baseCase f(0, 0) = 0
     */

    let dpTable = [];
    for (let i = 0; i <= text1.length; i++) {
        dpTable[i] = [0];
    }

    for (let i = 0; i <= text2.length; i++) {
        dpTable[0][i] = 0;
    }

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dpTable[i][j] = dpTable[i - 1][j - 1] + 1;
            } else {
                dpTable[i][j] = Math.max(dpTable[i - 1][j], dpTable[i][j - 1]);
            }
        }
    }
    
    return dpTable[text1.length][text2.length];
};

console.log(longestCommonSubsequence(text1, text2));