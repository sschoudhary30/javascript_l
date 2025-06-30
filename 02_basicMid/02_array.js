// Define two arrays
const marvel_heros = ["thor", "iron man", "captain AM"];
const dc = ["batman", "flash", "superman"];

// Using concat() to merge arrays (creates a new merged array)
// concat return new array
const mergedArray = marvel_heros.concat(dc);

console.log(mergedArray);
// Output: ["thor", "iron man", "captain AM", "batman", "flash", "superman"]

// Using push() (adds as a sub-array, not merging)
// push operate on existing array.
//marvel_heros.push(dc);

//console.log(marvel_heros);
/* Output:
[
  "thor",
  "iron man",
  "captain AM",
  ["batman", "flash", "superman"]  // Nested array
]
*/

// one more use spreed operate
const allheros_spread = [...marvel_heros, ...dc];

console.log(allheros_spread);

let sayArray = [1, 2, 3, [4, 5, 6], 7, 8, [6, [5, 4, 5], 6]];

const useAble_array = sayArray.flat(Infinity); // flat take parametre which depth for how much sub_array should be desolved.

// this it use for scrapping and all

console.log(Array.isArray("suresh"));

// to convert in array
console.log(Array.from("suresh"));

console.log(Array.from({ name: "hitesh" })); // interesting case for interview. it will return empty array.

/// to convert set of element in array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // element , array, variable
