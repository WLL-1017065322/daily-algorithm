const { test } = require('./test');

const method = (value) => {
    if (value < 0) {
        return false;
    } else {
        const newValue = value.toString().split("").reverse().join("")
        if (parseInt(newValue) === value) {
            return true;
        } else {
            return false;
        }
    }
}
const a1 = 321123;
test(method, [a1]);