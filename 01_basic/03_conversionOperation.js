let score = 33;
score = false; // let declare follow.

let valueInNumber = Number(score); // this number which string to number or fix hai

console.log(typeof score); // way one
console.log(typeof score);
console.log(typeof valueInNumber);

console.log(valueInNumber); // this will give number when string of number
// if string "33" then output is 33
// but if string "33abc" then output is NaN.
// value is null then output is 0
// true/false 1/0 respect
// undefine = undefine

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// NaN = 0;
// NaN == NaN // is false
// to check value is NaN we use isNaN.

let isLoggedIn = "suresh";

let booleanLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let names = 33;

let StringCon = String(names);

console.log(typeof StringCon);
console.log(StringCon);
// this converstion are more usefull in javascript from.

// ***************************** Operation *********************

let value = 3;
let negValue = -value;
//console.log( negValue)
/**
 * console.log(2+2)
 * console.log(2-2)
 * cosole.log(2*2)
 * cosole.log(2**2)
 * console.log(2/3)
 * console.log(2%3) remainder
 *
 *
 */

console.log(1 + 2 + "3");
console.log("3" + 2 + 2);
console.log(3 + 3 / 3);

// there is asscosiativity.

console.log(+true); // output 1

console.log(+""); // output 0

let num1, num2, nums3;
num1 = num2 = 4;
num2 = 5;
num3 = num2;

console.log(num2);

let num = 100;
//console.log(num++)
console.log(++num);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
