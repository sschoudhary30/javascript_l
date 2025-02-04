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

console.log(myArr.includes(9));