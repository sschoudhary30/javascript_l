// singleton - object by constructor;
// object can be declare as constructor or literal.
// object are not singleton.
// Object.create is  constructor method.

// Interview question:- take symbol add in object key and print it.
 
const mySymbol = Symbol("suresh");

const JSuser = {
        
            name:"suresh",
            "full name":"suresh choudhary",
            [mySymbol]:"suresh", // this symbol to use in object
            age: 18,
            email: "suresh@google.com",
            isLoggedIn: false,
            lastLoginDays: ["Monday","Sunday"]

    
} // Object literals.


// way to acces data of object.

//console.log(JSuser.email) // normal ways
//console.log(JSuser["email"]) // square notation

// "full name":"suresh choudhary"
// this kind of value can't be acces by JSuser.full name ways.
// we have to use JSuser["full name"] only to access it.

//console.log(JSuser["full name"]);
//console.log(JSuser[mySymbol]);
//console.log(typeof mySymbol);



// *** 
//console.log(typeof mySymbol); // Output: "symbol"
//console.log(typeof JSuser[mySymbol]); // Output: "string"

/**
 * 🔹 Why is typeof JSuser[mySymbol] returning "string" instead of "symbol"?
mySymbol is a Symbol, but when used as a key in the object, it still follows normal key-value mapping.
The value stored in JSuser[mySymbol] is "suresh", which is a string.
You are checking the type of the value (JSuser[mySymbol]), not the key (mySymbol).
If you want the key itself to be of type Symbol, you should check typeof mySymbol, which returns "symbol".
 * 
 */

JSuser.email = "suresh@chat.com";
console.log(JSuser["email"])
// this use to change object data
//Object.freeze(JSuser); // *** imp
// we can freeze data of object to avoid changes 

JSuser.email = "suresh@apple.com";
//console.log(JSuser["email"])
//console.log(JSuser)

JSuser.greeting = function(){
    console.log("hello bhai kesa hai");
}

JSuser.greetingTwo = function(){
    console.log(`hello hai kese hai ${this.name}`)
}
// this use to refer same function here JSuser
console.log(JSuser.greeting) // it will give undefine

console.log(JSuser.greeting()) // this give error that it is not function

console.log(JSuser.greetingTwo())

