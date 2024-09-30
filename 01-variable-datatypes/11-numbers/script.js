let x ;

// const num = new Number(5)
const num = new Number(5.5656)

x = num.toString();
x = num.toString().length;
x = num.toFixed(2);
x = num.toPrecision(4)
x = num.toExponential(2)
x = num.toLocaleString('en-US')
x = num.valueOf()
console.log(num);
console.log(x);
// console.log(num,typeof num);
console.log(x,typeof x);