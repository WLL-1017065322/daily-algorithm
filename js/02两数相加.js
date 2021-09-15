const { test } = require('./test');



const numsTotal = (a1, a2) => {
    const num1 = a1.reverse().join("");
    const num2 = a2.reverse().join("");

    let num3 = parseInt(num1) + parseInt(num2);
    console.log(num3);
    const a3List = num3.toString().split("");
    let a3 = a3List.map(item => {
        return parseInt(item)
    });
    return a3;
}





const a1 = [2, 4, 3];
const a2 = [5, 6, 4]
test(numsTotal, [a1, a2]);
// const a3 = [0];
// const a4 = [0]
// test(numsTotal, [a3, a4]);



