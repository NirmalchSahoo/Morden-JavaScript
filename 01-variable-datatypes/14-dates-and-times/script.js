/* let d;

// Get today's date and time
d = new Date();

// Set to a string
d = d.toString();

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
d = Date.now();

// Get the timestamp of a specific date
d = new Date();
d = d.getTime();
d = d.valueOf();

// Create a date from a timestamp
d = new Date(1666962049745);

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

console.log(d);
 */

let d ;
d = new Date();
d = d.toString();
d = new Date(2024,0,10)
d = new Date(2024,0,10,12,34,23)
d = new Date('2021-07-10T12:30:30')
d = new Date('2021/07/10 12:30:30')
d = new Date(' 2022-2-12')
d = Date.now();
d = new Date();
d = d.getTime();
d = d.valueOf();
d  = new Date(1724658929396);

d = Math.floor(Date.now()/1000)
console.log(d);