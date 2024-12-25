let userid = "any string"

if (userid) {
    console.log("got userid");
    
} else {
    console.log("don't have userid");
}
// got userid  

let emptyString = ""

if (emptyString) {
    console.log("got userid");   
} else {
    console.log("don't have userid");
}
// don't have userid 

let arr = []

if (arr) {
    console.log("got userid");
} else {
    console.log("don't have userid");
}
// got userid 



// falsy values 
//  false, 0, -0, BigInt 0n, "", null, undefined, Nan

// inke alawa sab truthy values 
// "0", 'false', " ", [], {}, function () {}

if (arr.length === 0) {
    console.log("Array Is Empty");
} 
// Array Is Empty 

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty");
}
// Object is Empty 

// false == 0
// true

// false == ''
// true

// 0 == ''
// true 

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);
// 5

val1 = null ?? 10
console.log(val1);
// 10 

val1 = undefined ?? 15
console.log(val1);
// 15

val1 = null ?? undefined
console.log(val1);
// undefined 

val1 = null??undefined??5??10
console.log(val1);
// 5

// Terniary Operator

// condition ? true : false 

let headshotRate = 59

headshotRate >= 50 ? console.log("You Are Pro") : console.log("You Are Bot");
// You Are Pro