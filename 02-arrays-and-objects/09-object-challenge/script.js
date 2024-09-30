/* // Step 1
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mockingjay',
    author: 'Suzanne Collins',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
 */

// step 1

const librery = [

  {
  title : "The road ahead",
  author : "Bill Gates",
  status :{
    own :true,
    reading : false,
    read : false
  }
},
  {
  title : "Mix Puzzle",
  author : "Matt Bru",
  status :{
    own :true,
    reading : false,
    read : false
  }
},
  {
  title : "The Worthy Book",
  author : "John wick",
  status :{
    own :true,
    reading : false,
    read : false
  }
}
]

// step 2

librery[0].status.read= true
librery[1].status.read= true
librery[2].status.read= true


//step 3 

const {title :firstBook} = librery[0];
console.log(firstBook);

// step 4

const libraryJSON = JSON.stringify(librery);
console.log(libraryJSON);