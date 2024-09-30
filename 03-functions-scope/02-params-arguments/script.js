/* // Default Params
function registerUser(user = 'Bot') {
  // Old way - before using `=`
  // if (!user) {
  //   user = 'Bot';
  // }

  return user + ' is registered';
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: 'Sara',
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 */

// default parameters
function registerUser(user = "Bot"){
// if(!user){
//   user = "Bot";
// }


  return user+ " is registered";
}
// console.log(user);// scope is inside so cant access
console.log(registerUser("john"));

// rest parameters

function sum(...numbers){

  let total = 0;
  for(const num of numbers){
    total  += num;
  }
  return total;
}
console.log(sum(2,5,4,4,4));


// object as params

function loginUser(user){
  return `The user ${user.name} with the id of ${user.id} is logged in`
}
const user = {
  id:1,
  name:'john'
}
console.log(loginUser(user));
console.log(loginUser({
  id:2,name:'sara'
}));

// Arrays as params
// function getRandom(arr){
//   const randomIndex = Math.floor(Math.random()*arr.length);
//   const item = arr[randomIndex];
//   console.log(item);
// }

// getRandom([4,8,9,3,5,2,45,87]);
// Arrays as params
function getRandom(...arr){
  const randomIndex = Math.floor(Math.random()*arr.length);
  const item = arr[randomIndex];
  console.log(item);
}

getRandom(4,8,9,3,5,2,45,87);