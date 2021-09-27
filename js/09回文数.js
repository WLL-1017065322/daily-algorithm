const { test } = require('./test');

const method = (value) => {
    if (value < 0) {
        return false;
    } else if (value === 0) {
        return true;
    } else {
        console.log(value);
        const newValue = value.toString().split("").reverse().join("")
        console.log("newValue", newValue);
        if (parseInt(newValue) === value) {
            return true;
        } else {
            return false;
        }
    }
}

const method1 = (value) => {
    if (value < 0) {
        return false;
    } else if (value === 0) {
        return true;
    } else {
        let nums = 0;
        let newValue = value;
        while (value >= 1) {
            const num = value % 10;
            nums = num + nums * 10;
            value = ~~(value / 10);
        }
        if (newValue === nums) {
            return true;
        } else {
            return false;
        }
    }
}

var method2 = function(x) {
    var xStr = x.toString();
    var yArr = [];
    for (var i = 0; i < xStr.length; i++) {
        yArr[i] = xStr[xStr.length - 1 - i]
    }

    if (yArr.join('') == xStr) {
        return true;
    } else {
        return false;
    }
};

// const a1 = 0;
// test(method, [a1]);
const a1 = 1102144212;
test(method1, [a1]);
test(method2, [a1]);