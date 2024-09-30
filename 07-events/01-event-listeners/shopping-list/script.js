/*  const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // itemList.innerHTML = '';

  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// JavaScript Event Listener
clearBtn.onclick = function () {
  alert('Clear Items');
};

clearBtn.onclick = function () {
  console.log('Clear Items');
};

// addEventListener()
clearBtn.addEventListener('click', () => alert('Clear Items'));

// Use named function
clearBtn.addEventListener('click', onClear);

// removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Fire off event from JS
setTimeout(() => clearBtn.click(), 5000);
 */

const clearBtn = document.querySelector('#clear');

function onClear() {
  // alert('clear items');
  // claer items 
  const itemList = document.querySelector('ul')
  const items = document.querySelectorAll('li')

  // itemList.innerHTML ='';

  // 2nd option 

  // items.forEach((item)=> item.remove());

  // 3rd option

  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
  }


}

// javascript eventlistener

// clearBtn.onclick = function () {
//   console.log('clear items');
// };

// add eventlistener

// clearBtn.addEventListener('click',()=>{
//   alert('clear items')
// })
// clearBtn.addEventListener('click',()=>{
//   console.log('clear items')
// })

clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
// setTimeout(()=> clearBtn.click(),5000)
