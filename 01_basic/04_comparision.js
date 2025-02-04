console.log(2 < 1);
console.log(1>=1); // < <= == != etc

console.log(2 > "1"); // automatic js convert this number


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// comparison > < >= <= and equal ==, === work differently.

// comparisons convert null to 0
// == equal check and === strick check 
// === check data type also no conversion

console.log(undefined >= 0) // this will always false

// avoid diff datatype conversion.

