// 
// promises making
// promise is object.
const promiseOne = new Promise((resolve , reject)=>
    {
        // Do an async task
        // DB calls, cryptography, network

        setTimeout(function(){
            console.log('Asyn task is compelete');
            resolve();
        },1000)
});

// phele promise part nahi tha core js then ye sab blue lib k help se promise apply hotha tha

// .then is directly related to resolve
promiseOne.then(function(){
    //console.log("promise consumed");

})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //console.log("Async 2 hai bhai");
        resolve()
    },1000);
}).then(()=>{
    //console.log("async 2 resolve");
})


const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"chai", email:"bhai@suresh.com"})
    },1000)

})

PromiseThree.then((user)=>{
    //console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:'suresh',password:'1234'})
        } else {
            reject('Error: something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{

    console.log(username)

})
.catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("the promise is resolve or rejected")
})

const promiseFive = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:'Aumix',password:'1234'})
        } else {
            reject('Error: JS went wrong')
        }
    },1000)
});

//async and await are similar to then and catch

// issue with async and await is they can't handle error directly we have to use try catch block
async function consumePromiseFive (){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);


    }
}

consumePromiseFive();

async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json();
        console.log(data)
        // here reponse also getting converted so it will also take time so use await here also
    } catch (error) {

        console.log("Error: ",error)
        
    }
}

//getAllUser()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})

