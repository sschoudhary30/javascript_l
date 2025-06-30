// Dates

let myDate = new Date();
console.log(myDate); // this less readable
console.log(typeof myDate); // is object
console.log(myDate.toString()); // this more readable
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

// date is object datatype
let myCreatedDate = new Date(2023, 0, 23);

console.log(myCreatedDate.toDateString()); // in js month start with 0.
// 2023-01-14 // in this case start with 01

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // use for quiz app and time specific stuff.

console.log(Math.floor(Date.now() / 1000)); // for second

let newDate = new Date();

console.log(newDate.getMonth() + 1); // getDay() bhi hotha hai

let newDate2 = newDate.toLocaleString("default", {
  // default is internationalization
  weekday: "long", // long means Monday and norrow mean mon
  day: "numeric",
});

console.log(newDate2);
