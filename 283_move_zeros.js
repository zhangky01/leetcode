function moveZeros(nums) {
    // 遍历元素，遇到0️，查找后面不为0的元素，交换位置。
    // 时间复杂度  大于 O(n)  小于 O(n^2)
    /* for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === 0) continue;
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            break
        }
    } */

    // 开辟新数组，存储不为0；
    // O(n)
    /* let newArray = [];
    nums.forEach(o => {
        if (o !== 0) {
            newArray.push(o);
            return;
        }
    });
    for (let i = 0; i < nums.length; i++) {
        if (newArray[i] === undefined) {
            nums[i] = 0;
        } else {
            nums[i] = newArray[i];
        }
    } */

    // 覆盖，声明index记录待填充的0元素的位置；
    /* let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        nums[index] = nums[i];
        if (i !== index) nums[i] = 0;
        index++;
    } */

    // 投机取巧
    nums.sort((a,b) => b? 0: -1);
};