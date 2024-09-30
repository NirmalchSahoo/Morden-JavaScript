/* //  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = (a) => a * 2;

// Returning an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());
 */


const add = (a,b)=>{
  return a+b;
}
const subtract = (a,b)=> a-b;

const double = a => a*2;

// retrurning an object 

const createObj = () =>({
  name : 'brad'
});

const numbers = [1,4,3,8,6]
numbers.forEach(function (n){
  console.log(n);
})

// arrow function in a callback
numbers.forEach(n => console.log(n));

console.log(add(8,9));
console.log(subtract(8,9));
console.log(double(9));
console.log(createObj());