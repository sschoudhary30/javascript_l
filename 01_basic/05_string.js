// string can be "hello" or 'helo'

const name = "suresh"
const repoCount = 50

// console.log(name + repoCount + " Value"); this not recommand now a day's.

console.log(`hello bhai mera naam ${name} hai`); // no need to use + to concatinate
// this is called as string interpolation.

const gameName = new String("suresh bhai,black ");

// this give more feature . this second why of string declare

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.toLocaleUpperCase());
console.log(gameName.toUpperCase()); // this not change og value

console.log(gameName.charAt(25))
console.log(gameName.indexOf('z'));

console.log(gameName.trimEnd())

console.log(gameName.split(/[" ",.]+/).filter(Boolean))

// check string prototype function.