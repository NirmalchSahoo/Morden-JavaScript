/* const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  // key
  // if (e.key === 'Enter') {
  //   alert('You pressed enter');
  // }

  // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes
  if (e.keyCode === 13) {
    alert('You pressed enter');
  }

  // code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  // repeat
  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  // shiftKey, ctrlKey & altKey
  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
};

// Event Listeners
itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
 */

const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};
const onKeyUp = (e) => {
  console.log('keyup');
};
const onKeyDown = (e) => {
  // console.log('keydown');
  // key
  console.log(e.key);
  // document.querySelector('h1').innerText = e.key
  if (e.key === 'Enter') {
    alert('you pressed enter ');
  }


  // keycode


  if (e.keyCode === 13) {
    alert('You pressed enter');
  }
    // code


    if(e.code === 'Digit1'){
console.log("you enter 1");
    }

    if(e.repeat){
      console.log('you are holding down '+ e.key);
    }

    console.log('Shift :' + e.shiftKey );
    console.log('Control :' + e.ctrlKey );
    console.log('Alt :' + e.altKey );

    if(e.shiftKey && e.key === 'K'){
      console.log('you typed shift k');
    }
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
