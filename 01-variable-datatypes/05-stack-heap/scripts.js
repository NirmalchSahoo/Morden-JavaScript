// values are store in stack

const name = 'john';
const age = 30;

// reference values are storded in the heep

const person = {
    name : 'john',
    age : 40
}
let newName = name;
newName= "johnathan";

let newPerson = person;
newPerson.name = "Bradly";
console.log(name,newName);
console.log(person,newPerson);