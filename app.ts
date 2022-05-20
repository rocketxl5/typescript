console.log('Hello world');

function add(input1: number, input2: number) {
  if (typeof input1 !== 'number' || typeof input2 !== 'number') {
    throw new Error('incorrect input');
  }
  return input1 + input2;
}

const num1 = '10';
const num2 = 20;

const result = add(num1, num2);

console.log(result);
