//

const myArr = [0, 2, 3, 5, 6, 7, 8, 9];

myArr.push(10);
myArr.pop();

console.log(myArr);

//myArr.forEach((el) => console.log(el));

// myArr.forEach((el) => console.log(myArr.filter((el) => el > 5)));

console.log(myArr.reduce((acc, curr) => acc + curr, 0)); // here 0 is initial value. // if not give first element of array is consider as initial

console.log(myArr.filter((el) => el > 5));

// unshift and shift

// join this convert to string

// in js index can be anything not only numeric.
// when we declare array in js
// let myArray = ["apple", "banana"];
// myArray["color"] = "red";
// it actually look like this
// {
//     "0": "apple",
//     "1": "banana",
//     "color": "red", // This is a new, enumerable property
//     length: 2
//   }

// go deep in slice and splice

// shallow copy have same ref - Re-assigning the value of a nested property will be visible in both objects.
// const ingredientsListCopy = Array.from(ingredientsList);
// console.log(ingredientsListCopy);

// deep copy like make array of same element with wrapper class
// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
