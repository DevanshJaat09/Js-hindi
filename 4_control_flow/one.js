//  if 

// agar condition true hogi tabhi if wali statement execute hogi 

// if (condition) {
    
// }

//  < , > , => , <= , == , != , === , !==
//  = is used for assignment 
//  == is used for comparison 

let headshotRate = 60

if (headshotRate > 50) {
    console.log("You Are A Pro Player");
    
} else {
   console.log('You Are Bot');
}
// You Are A Pro Player 

let score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
// User power: fly

const balance = 1000
//  try to avoid this type of code
if (balance > 500) console.log("test"),console.log("test2");
// test
// test2

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}
// less than 1200 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}
// Allow to buy course


if (loggedInFromGoogle || loggedInFromEmail || 4<3) {
    console.log("User logged in");
}
// User logged in 

// && -> sari statements true hongi tabhi execute hoga
// || -> ek bhi statment true hui toh bhi execute hojaega 