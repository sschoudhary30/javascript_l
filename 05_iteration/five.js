const coding = ["js","c++","ruby","python"];
// this normal why
coding.forEach( function(val){
    //console.log(val);
})

// this is more morden way
coding.forEach((item)=>{
    //console.log(item);
})

coding.map((item)=>{
    //console.log(item);
})

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
     //console.log(item, index, arr);
} )
// output of this

// js 0 [ 'js', 'c++', 'ruby', 'python' ]
// c++ 1 [ 'js', 'c++', 'ruby', 'python' ]
// ruby 2 [ 'js', 'c++', 'ruby', 'python' ]
// python 3 [ 'js', 'c++', 'ruby', 'python' ]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName,item.languageFileName);
})

//console.log(myCoding)