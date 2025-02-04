// array

const myArr = [0,1,2,3,4,5,6]
// javascipt k arrays resizeble hothe hai
// when we do copy operation in js it will make shallow copy( same ref point) and deep copy( stack copy of array)

const myArr2 = new Array(1,2,3,4)

// arrays also have prototype feature

myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr);

myArr.shift();
// remove value of first place.
// myArr.unshift(9);
//his is not good bzc it add value in starting.
// good for todo list

console.log(myArr.includes(9)); // yes or now

console.log(myArr.indexOf(27)); // what is there on index place

const newArr = myArr.join();// this convert data type array to string.

// slice or splice most asked question

const myn1 = myArr.slice(1,3);// not include 3 element and work copy array

const myn2 = myArr.splice(1,3);// include 3 element also and work on reference arrays or original array. remove that portion from array.


