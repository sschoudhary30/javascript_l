const score = 400;

const balance = new Number(100);
console.log(balance);
console.table([score, balance]);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // for e-comm float value

// .toPrecision(3); etc priorty after decimal.

const hundreds = 100000;
console.log(hundreds.toLocaleString("en-IN"));
// MAX_VALUE or MIN_VALUE;

//++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++;

console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); //5
console.log(Math.round(4.3)); // 4
console.log(Math.max(3, 4, 5, 66));
console.log(Math.random() * 10 + 1); //1 to 10
console.log(Math.round(Math.random() * 6)); //0 to 6

const max = 20;
const min = 10;
// now this give 10 to 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
