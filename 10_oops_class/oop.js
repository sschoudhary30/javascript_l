const user = {
    username: "suresh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log('Suresh bhai aaya hai!!');
        console.log(`Username is : ${this.username}`); // this.username is use to set context

        console.log(this);
    }

}


const user1 = {
    username: "bhawa",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        console.log(`${this.username} bhai aaya hai!!`);
        console.log(`Username is : ${this.username}`); // this.username is use to set context

        console.log(this);
    }

}
console.log(user['loginCount']);

//console.log(user.getUserDetails())

//console.log(user1.getUserDetails());

//console.log(this);// this global context;

// constructor function;


//const promiseOne = new Promise();
//const date = new Date();

// there new keyword is constructor function,

// new keyword is used set new context

function User(username , loginCount, isLoggedIn){
    this.username = username, // this.username is variable and username is passed value,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.getUserDetails = function() {
        console.log(`User: ${this.username}, Login Count: ${this.loginCount}, Logged In: ${this.isLoggedIn}`);
    };
    return this // return this write or not doesn't needed

}

// constructor function give new instance every time.
// new step 1 create new empty object.
// constructor call hotha hai
// step 3 inject of value
// step 4 set.

const userOne = new User("Suresh",8,true);
const userTwo = new User("bhawa",7,false);

console.log(userOne)
console.log(userTwo)
console.log(userOne.getUserDetails());
console.log(userTwo.getUserDetails());

// instanceof and constructor.

