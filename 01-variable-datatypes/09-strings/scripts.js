let x;
const name = 'john';
const age = 30;

x = 'Hello, My anme is ' + name + ' and I am ' + age + ' years old';
console.log(x);

// template literals

x = `hello , my name is ${name} and I am ${age} yeas old`;
console.log(x);

// String properties and Methods

const s = new String('Hello World');
x = s.length;
x = typeof s; // object

// access value by key

x = s[1];
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(1);
x = s.indexOf('H');
x = s.substring(1, 4); //returns the 1st to last index value of a string
x = s.slice(-11, -5);

x = '                        Hello World ';
x = s.trim();
x = s.replace('World', 'John');
x = s.includes('Hell'); // false

x = s.valueOf()
x = s.split();
x = s.split('');
console.log(x);
