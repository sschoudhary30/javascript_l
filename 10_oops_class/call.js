function SetUsername(username){
    // complex DB
    this.username = username,
    console.log('call setuser')
}

function createUser(username,email, password){
   
    //SetUsername(username); // this is reference not actual call; but proper call nahi which hold reference  
    SetUsername.call(this,username);
    // use this key here to hold reference 
    this.email = email,
    this.password = password
}

const chai = new createUser("suresh","bhai@google.com","123");

console.log(chai);