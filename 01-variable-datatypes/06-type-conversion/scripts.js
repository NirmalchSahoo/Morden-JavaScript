let amount = '100';
// change string to number
// amount = parseInt(amount);
// amount = +amount;
amount = Number(amount);
console.log(amount,typeof amount);


/// string to number

let num = 49;
num = num.toString()
console.log(num , typeof num);
// num to float and vice versa

let num1 = 78
let num2 = 70.8
num1 = parseFloat(num1);
num2 = parseInt(num2);

console.log(num1 , typeof num1);
console.log(num2 , typeof num2);

// number to boolean 

let num3 = 0; // for 0 its return false for 1 it return true
num3 = Boolean(num3);
console.log(num3,typeof num3);

let num4 = "hello"
num4 = parseInt(num4)
console.log(num4,typeof num4); // returns NaN
console.log(Math.sqrt(-1));
console.log(1+NaN);
console.log(undefined + undefined);
console.log('foo'/3);