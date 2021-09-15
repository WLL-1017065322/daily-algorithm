const test = (cb, items) => {
    const startDate = Date.now();
    const result = cb(...items);
    console.log('结果：', result);
    const endDate = Date.now();
    console.log('花费时间：', endDate - startDate);
}

module.exports = { test };