/* const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className - Gets a string of all classes
  console.log(itemList.className);
  // Changing the classes with className
  text.className = 'card dark';

  // classList - Array of classes, which also has methods to add, remove, toggle and replace
  console.log(itemList.classList);

  // We can loop through the classes
  itemList.classList.forEach((c) => console.log(c));

  // Add, remove, toggle, replace
  text.classList.add('dark');
  text.classList.remove('card');
  text.classList.toggle('hidden');
  text.classList.replace('card', 'dark');

  // style property - Add styles to elements
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;
 */

const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run() {
  //class name

  // console.log(itemList.className);
  // text.className = 'card dark'

  //classlist
  // console.log(itemList.classList);

  itemList.classList.forEach((c) => console.log(c));

  // text.classList.add('dark')
  // text.classList.remove('card')

  // text.classList.toggle('dark')
  // text.classList.toggle('hidden')
  text.classList.replace('card', 'dark');
  // change the style

  // itemList.style.lineHeight = '3'

  items.forEach((item,index) => {
    item.style.color = 'red';
    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;
