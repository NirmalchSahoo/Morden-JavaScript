// three ways to declare variables
// var , let , const

let fisrtName = 'john';
let lastName = 'Doe';

console.log(fisrtName, lastName);

// var age = 30;
let age = 30;

console.log(age);

// Multiword formatting
// firstName = camelcase
// fisrt_name = underscore
// FirstName = pascalcase
// firasrname = lowercase

// re-assigning variables
age = 32;
console.log(age);

let score = 1;

console.log(score);
if (true) {
  score = score + 1;
}
console.log(score);

const x  = 100;
// x = 200 // can't do it 

// const score = 100 // cant reaasign

const arr = [1,34,5,3,3,3];

// arr  = [3,46,4,4]

arr.push(5);
console.log(arr);

const person = {
    name:'john'
}

console.log(person);

person.age = 25;
person.email = "john@gmail.com"
console.log(person);

// declare multiole values at once 

let a,b,c;
const  d =10,
e=17,f=10;
console.log(d);

