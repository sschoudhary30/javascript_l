//const tinderUser = new Object();// ye singelton object hai.
const tinderUser = {}; // both same only both will return object or ye constructor type.

tinderUser.id = "50600"
tinderUser.name = "Golu master"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "suresh@linkedin.com",
    fullname: {
        userfullname: {
            firstname: 'suresh',
            lastname: 'choudhary'
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)


// optional chaining

console.log(regularUser.fullname?.userfullname.firstname) // here let fullname nahi but username hai.

const object = {
    name:"suresh",
    rollno:"54",
    classno:"23"
}

const object2 = {
    name:"rahul",
    rollno:"56",
    classno:"24"
}

const object3 = Object.assign({},object,object2);

console.log(object3)

// for same key word will overwrite new value.
// output will be value of object2.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]


console.log(users[1].email);

// how to get all of object arrays // which can help in looping and all.

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // this will return keys of tinderUser object in array datatype.
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));// 

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // check property hai ye nahi. 


// Destructing of object;

const course = {
    coursename: "js in hindi",
    price: "999",
    coursementor:"hitesh"
}

//course.coursementor

const {coursementor: mento} = course
// const {kya value: custom_short_name} = place



// ++++++ API +++++++

//api = value coming from backend

// json me key and value dono string hothe hai, but same for object.

// api data can be json object or array