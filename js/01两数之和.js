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

// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

//first 
var twoSum1 = function(nums, target) {
    // var arr = {};
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] == (target - nums[i])) {
                return [i, j];
            }
        }


    }
}


nums = [-2, 6, 1, 7, 15];
target = -9;

var ts = twoSum1(nums, target)
console.log(ts)

//second

var twoSum2 = function(nums, target) {
    var arr = {};
    for (var i = 0; i < nums.length; i++) {
        if (typeof(arr[nums[i]]) !== "undefined") {
            return [arr[nums[i]], i];
        }
        arr[target - nums[i]] = i;
    }
};


nums = [2, 6, 1, 7, 15];
target = 9;

var ts2 = twoSum2(nums, target)
console.log(ts2)


//暴力搜索

var twoSum = function(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var num2 = target - nums[i]
            if (num2 === nums[j]) {
                result[0] = i;
                result[1] = j;
                break;
            }
        }

    }
    return result;
};

// 使用Object（键值对）
var twoSum = function(nums, target) {
    var newNums = {};
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        newNums[nums[i]] = i;
    }
    for (var i = 0; i < nums.length; i++) {

        var num2 = target - nums[i];
        if (typeof newNums[num2] !== "undefined" && newNums[num2] !== i) {
            result[0] = i;
            result[1] = newNums[num2];
            break;
        }
    }
    return result;
};


//一遍Object

var twoSum = function(nums, target) {
    var newNums = {};
    var result = [];

    for (var i = 0; i < nums.length; i++) {

        var num2 = target - nums[i];
        if (typeof newNums[num2] !== "undefined") {
            result[0] = newNums[num2];
            result[1] = i;
            break;
        } else {
            newNums[nums[i]] = i;
        }
    }
    return result;
};

//Map方法

var twoSum = function(nums, target) {
    var newNums = new Map();
    var result = [];

    for (var i = 0; i < nums.length; i++) {

        var num2 = target - nums[i];
        if (newNums.has(num2)) {
            result[0] = newNums.get(num2);
            result[1] = i;
            return result;
        } else {
            newNums.set(nums[i], i);
        }
    }
};



















const nums = [2, 3, 5, 3];
const target = 6;

// test(numsTotal, [nums, target]);
test(numsTotal1, [nums, target]);
// test(numsTotal2, [nums, target]);