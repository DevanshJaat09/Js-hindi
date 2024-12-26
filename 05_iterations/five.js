const coding = ['js', 'ruby','java','cpp']

// callback function -> function () {}

// array ke liye loops injected hote hain 

coding.forEach( function (val) {
    console.log(val);  
} )
// js
// ruby
// java
// cpp

coding.forEach( (a) => {
    console.log(a);
})
// js
// ruby
// java
// cpp

function print (item){
    console.log(item);
}
coding.forEach(print)
// js
// ruby
// java
// cpp
// funtion ka reference dena hai use execute nhi krna 

coding.forEach( (value, index, array) => {
    console.log(value, index, array);
})
// js 0 [ 'js', 'ruby', 'java', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'cpp' ]
// cpp 3 [ 'js', 'ruby', 'java', 'cpp' ]

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

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
// javascript
// java
// python