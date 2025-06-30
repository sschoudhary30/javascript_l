// Primitive
// 7 type: String, Number, Boolearn, null , undefined, Symbol, BigInt

// this above are call by value

// Reference (non Primitive)

// Array, Object, Function // point to location not value

// learn browser event master and dom manulipation and object.

// dynamically type lang

const id = Symbol("123");
const anotherId = Symbol("123");
// even value is same but result will be not same

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n. // ye last me n laganai see bigint hogya

const Hero1 = ["bheem", "shaktiman", "naagraj", "doga"];

const Hero2 = Hero1;

Hero2[1] = "suresh";

console.log(Hero1);

let myObj = {
  name: "suresh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello Suresh");
};

// function data type if function object.

// +++++++++++++++++
// Stack(Primitive) ye pe copy mil tha hai og value ka , Heap(non-primitive) ye pe reference mil tha hai og value ka. point to value

let myYoutubename;
