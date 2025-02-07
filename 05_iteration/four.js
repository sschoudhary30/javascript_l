const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    py:"python"
}

for(const key in myObject){
    //console.log(myObject[key]);
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {

    //console.log(key);// this line will return index of arrays
    //console.log(programming[key]);
}

// below will not work

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }