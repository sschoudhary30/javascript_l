// javascript me function imp hai also learn memory management.
// call stack and scrope.

// function package of code.

function sayMyname(){
    console.log("hello bhai kesa hai!")
}

sayMyname(); 
// sayMyname is reference and when we add () then it become function excute.

function addTwoNum(num1,num2/**this parameter */){
    console.log(num1+num2);
    return num1+num2;
}
const result = addTwoNum(2,"3a"/**this are argument */); 

console.log(result);

function loginUserMessage(username = "suresh"/** default is suresh */){
    if(!username/** this equal to username === undefined */){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//undefined == false
//so ! username === undefined = true move next.
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


// shopping cart logic where we don't know no number of parameter bzc item can be many.

function calculateCartPrice(...num1){
    return num1;// abhi ye sab array me hai and baad me add kar do loop see
}

console.log(calculateCartPrice(2,3,4,4));

// this ... are called rest also and spread also operator

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// val1 got 200 and val2 got 400 and rest got in array

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    prices: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));