/* let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting arrays

// Nesting berries inside of fruits
fruits.push(berries);

// Now we can access 'blueberry' with the following
x = fruits[3][1];

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() - Concatenate arrays
x = fruits.concat(berries);

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// Static methods of Array object

// isArray() - Check is is an array
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from('12345');

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
 */


let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

x = fruits.push(berries);
// x = fruits[3][1];
const allFruits = [fruits,berries]
x = allFruits
// x = allFruits[0][1] // 1st array 2nd index 
x = fruits.concat(berries)

// spread operator (.....)
x = [...fruits,...berries]

//flatten arrays
const arr = [1,2,[5,6],5,[6,8,3],8]
x = arr.flat();

// static methods on array object
x = Array.isArray('hello')
x = Array.from('12345');

const a = 1
const b = 2
const c = 3
x = Array.of(a,b,c)
console.log(x);