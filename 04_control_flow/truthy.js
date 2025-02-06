const userEmail = " "

if(userEmail) {
    console.log(` Got user emails`);
}
else {
    console.log(" don't have user emails");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


/// truthly or falsy value where we assume value.

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0/** bzc this give empty array */) {
    console.log("Object is empty");
}


// false == 0 is true
// 0 == "" and false == "" is also true

// Nullish Coalescing Operation (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // here value is 10

console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")