const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website!`);
        console.log(this);
    }
}

// this.username // this is current context reference.

user.welcomeMessage()

user.username = "sam"; // there context or value is changed.
user.welcomeMessage()

console.log(this) // this will refer to node context which empty.

// but dev tool me context different hotha hai.

function chai(){
    const uuname = "suresh"
    console.log(this.uuname); // this will show undefined
}

//chai();

// context work this way in object only,


const chai2 = function() {
    const uuname = "suresh"
    console.log(this.uuname);

}

//chai2() // this is same only

const chai1 = ()=> {
    const uuname = "suresh"
    console.log(this.uuname);

} // arrow while return undefine with this keyword.

//chai1()

const addTwo = (num1,num2) =>{
    return num1 + num2;

}
// const addTwo = (num1, num2) =>  num1 + num2 // this called implicit return

// const addTwo = (num1, num2) =>  (num1 + num2) // this same

//when curly braket is used { } then have to write return keyword.

// () no need to write return keywords

//const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3,5))

// const myArray = [2,3,5,6,7]

// myArray.forEach()