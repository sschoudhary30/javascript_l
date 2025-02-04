// Primitive 
// 7 type: String, Number, Boolearn, null , undefined, Symbol, BigInt

// this above are call by value

// Reference (non Primitive)

// Array, Object, Function // point to location not value

// learn browser event master

// dynamically type lang

const id = Symbol('123')
const anotherId = Symbol('123')
// even value is same but result will be not same

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n.

const Hero1 = ["bheem","shaktiman","naagraj","doga"]

const Hero2 = Hero1;

Hero2[1] ="suresh";

console.log(Hero1)

let myObj = {
    name:"suresh",
    age:22,
}

const myFunction = function(){
    console.log("Hello Suresh");
}

// function data type if function object.