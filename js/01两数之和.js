const numsTotal = (nums, target) => {
    let list = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                list = [i, j];
            }
        }
    }
    if (list.length === 0) {
        // throw Error('无结果');
        return '无';
    } else {
        return list;
    }
}
const nums = [3, 2, 5,4];
const target = 6;
// numsTotal(nums, target);


const test = (cb, items) => {
    const startDate = Date.now();
    for(let i = 0;i < 2; i++){
        // const result = cb(...items);
        console.log(1);
        // console.log('结果：', result);
    }
    const endDate = Date.now();
    console.log('花费时间：', endDate - startDate);
}

test(numsTotal, [nums, target]);