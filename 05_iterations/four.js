const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "ruby"
}

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// remove if statement 

for (const key in myObject) {
   console.log(key);   
}   
// js
// cpp
// rb

// key aajaye or object nikalna ho toh 

for (const key in myObject) {
   console.log(`${key} Stands for ${myObject[key]}`);
}
// js Stands for JavaScript
// cpp Stands for C++
// rb Stands for ruby

const languages = ['JavaScript', 'Java', 'Python']

for (const key in languages) {
   console.log(key); 
}
// 0
// 1
// 2

// array mein bhi keys hoti HTMLDetailsElement, objects ko invent isliye kia gya tha 
// taki apni marji ki key daal ske 

for (const key in languages) {
    console.log(languages[key]); 
}
// JavaScript
// Java
// Python

const map = new Map()
map.set('In', 'India')
map.set('Ru', 'Russia')
map.set('Nl', 'Netherlands')
map.set('Fr', 'France')


for (const key in map) {
   console.log(key); 
}
//  no-output

// map ki mdn documentation dekhlio 