// for of arrays specific.

// ["", "", ""]
// [{}, {}, {}]
// arrays can have value and object.

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //console.log(num);
}

const nums = "Hello bhai";

for (const num of nums) {
  console.log(num);
}

// Map

const map = new Map();
map.set("IN", "India");
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);
// this syntax for map
for (const [key, value] of map) {
  console.log(key, value);
}
// map are not iterable by for in loop

// object are not iterable with for loop.
