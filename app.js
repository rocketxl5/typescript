console.log('Hello world');
function add(input1, input2) {
    if (typeof input1 !== 'number' || typeof input2 !== 'number') {
        throw new Error('incorrect input');
    }
    return input1 + input2;
}
var num1 = '10';
var num2 = 20;
var result = add(num1, num2);
console.log(result);
