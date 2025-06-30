// kuch nahi time pass hai

let myDate = new Date();
console.log(myDate);
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(myDate.toLocaleTimeString());

function gettime() {
  myDate = new Date();

  const currenttime = myDate.toLocaleTimeString();

  console.log(currenttime);
}

console.log(setInterval(gettime, 60000));
