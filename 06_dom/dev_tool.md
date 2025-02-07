## document diagram 

in dev tools

console.log(window)
console.log(document)
console.dir(document)// doc info and window info mix.


window
|
V
Document
        |
        V
        HTML
        |    \
        V     V
       HEAD   BODY
       |        |
title, meta    DIV -> attribute

document.getElementById('firstHeading').innerHTML = "<h1>suresh bhai</h1>"