const { test } = require('./test');

const method = (value) => {
    const oldStr = value;
    let newStr;
    if (oldStr[0] === '-') {
        let str = oldStr.substring(1, oldStr.length);
        newStr = `-${str.split("").reverse().join("")}`
    } else {
        newStr = value.split("").reverse().join("");
    }
    return newStr;
}

const method1 = (x) => {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = ~~(x / 10); //舍去小数，不同于Math.floor,
        rev = rev * 10 + digit;
        console.log(rev, x, digit);
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0
        }
    }
    return rev;
}

var method2 = function(x) {
    var a = 0;
    var abs = Math.abs(x);
    while (abs != 0) {

        t = abs % 10;
        a += t.toString();
        abs = parseInt(abs / 10);

    }
    if (x >= 0 && a <= Math.pow(2, 31) - 1 && a >= -Math.pow(2, 31)) {
        return parseInt(a);
    } else if (x < 0 && a <= Math.pow(2, 31) - 1 && a >= -Math.pow(2, 31)) {
        return parseInt(-a);
    } else {
        return 0;
    }

};

const a1 = -321456;
test(method1, [a1]);
test(method2, [a1]);