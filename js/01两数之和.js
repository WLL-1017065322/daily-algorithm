// import { test} from './test';
const { test } = require('./test');
// 暴力破解
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
// 哈希映射
const numsTotal1 = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let key = target - nums[i];
        console.log(map);
        if (map.has(key)) {
            console.log('key', key);
            return [map.get(key), i];
        }
        map.set(nums[i], i);
    }
    throw Error("No two sum solution");
}

// 
const numsTotal2 = (nums, target) => {
    let newList = [];
    let flag = false;
    for (let i = 0; i < nums.length; i++) {
        const key = target - nums[i];
        const index = newList.indexOf(key)
        if (index != -1) {
            flag = true;
            return [index, i];
        }
        newList.push(nums[i]);
    }
    if (!flag) {
        return '无结果';
    }
}

const nums = [2, 3, 5, 3];
const target = 6;

// test(numsTotal, [nums, target]);
test(numsTotal1, [nums, target]);
// test(numsTotal2, [nums, target]);

