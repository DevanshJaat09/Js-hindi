// while (condition) {
    
// }
// condition ka initialization of increment hame khud se likhna padega 


let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
// Score is 11

// do while loop mein pehle kaam hoga or end mein condition check hogi 

let marks = 1

do {
    console.log(`Marks are ${marks}`);
    marks++
} while (marks < 3);
// Marks are 1
// Marks are 2