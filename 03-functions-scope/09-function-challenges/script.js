/* // Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temp is ${getCelsius(35)} \xB0C `);

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([2, 31, 4, 5, 6]));

// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);
 */

// get celcius

/* function getCelcius(f) {
  const celcius = ((f - 32) * 5) / 9;
  return celcius;
} */

const getCelcius = (f) => ((f - 32) * 5) / 9;

console.log(getCelcius(109));

const getKilogram = (pound) => pound / 2.205;

console.log(getKilogram(347));

// challange 2

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.min(...arr);
  console.log(min);
  console.log(max);
  return {
    min,
    max,
  };
}

console.log(minMax([6, 3, 26, 3]));

// challenge 3
((length,width)=>{
  const area = length*width
  const output = `The area of reactangle with the  ${length} and ${width} is ${area}`
  console.log(output);
})(20,10);

