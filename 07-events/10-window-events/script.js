/* // On Page Load
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => console.log('Page Loaded'));

// On DOM Load
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

console.log('Run me');

// Resize Event
window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// Scroll Event
window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

// Focus & Blur Events
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
 */

window.onload = function () {
  document.querySelector('h1').textContent = 'hello world';
};

window.addEventListener('load', () => {
  console.log('page loaded ');
});
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded ');
});

console.log('run me');

window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `resize to ${window.innerWidth} x ${window.innerHeight}`;
});
window.addEventListener('scroll', () => {
console.log(`scrooled : ${window.scrollX} x ${window.scrollY}`);  
});
 
// window.addEventListener('load',()=>{

//   document.querySelector('h1').textContent = "hello world";
// })
// window.addEventListener('DOMContentloaded',()=>{

//   document.querySelector('h1').textContent = "hello world";
// })


// Scroll Event
window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

// Focus & Blur Events
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});