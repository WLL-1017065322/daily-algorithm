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
const a1 = 0;
test(method, [a1]);