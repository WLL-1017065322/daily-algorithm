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

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const numsTotal1 = (l1, l2) => {
    let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }

    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
}





const a1 = [2, 4, 3];
const a2 = [5, 6, 4]
test(numsTotal, [a1, a2]);
const l1 = [9, 9, 9, 9, 9, 9, 9,];
const l2 = [9, 9, 9, 9,]
test(numsTotal1, [l1, l2]);



