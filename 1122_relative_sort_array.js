let arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6];
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    if (arr2.length === 0 || arr1.length === 0) return arr1;
    let index = 0;
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        for (let j = index; j < arr1.length; j++) {
            if (element == arr1[j]) {
                let temp  = arr1[index];
                arr1[index] = arr1[j];
                arr1[j] = temp;
                index++;
            }
        }
    }
    for (let i = 0; i < arr1.length - (index + 1); i++) {
        for (let j = index; j < arr1.length - (i + 1); j++) {
            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
        }
    }
    return arr1;
};

console.log(relativeSortArray(arr1, arr2));