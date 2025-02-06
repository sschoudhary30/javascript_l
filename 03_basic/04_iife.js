// Immediately Invoked Function Expression (IIFE).

// let say we some function immediately excute as soon as code.
// Like database connection function.
// iife mean's excute before global scope so that global scope doesn't polute thing.

// *** this syntax for iife
(function chai() {

    // named iife
    console.log(`DB CONNECTED!!`)
})();

// (here we write function defination)(this is for function excution); and use semicoln to stop context

//()();

( (name) => {

    // this unamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('Suresh')


