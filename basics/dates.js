// let myDate = new Date()
// console.log(myDate);

// date bhi object hota hai 


const date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toString());
console.log(date.toTimeString());
console.log(date.toUTCString());
console.log(typeof date);


// *****************************************************************************************************

// [Function: toDateString]
// [Function: toISOString]
// [Function: toJSON]
// [Function: toLocaleDateString]
// [Function: toLocaleString]
// [Function: toLocaleTimeString]
// [Function: toString]
// [Function: toTimeString]
// [Function: toUTCString]
// bracket bhule toh ye output aega 



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ specific date declare krne ka tareeka ********************************



// let myCreatedDate = new Date(2024,0,24)
// let myCreatedDate = new Date(2024,0,24,5,3)

// array mein date doge toh month 0 se start hoga, dd mm yyyy mein kroge toh 1 se start hoga 

//  let myCreatedDate = new Date("2024-10-24")
 let myCreatedDate = new Date("10-24-2024")
console.log(myCreatedDate.toLocaleString());



//  ---------------------------------------Time Stamp ----------------------------------------------

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);


// 1970 se abhi tak ka millisecond value hai ye 

console.log(myCreatedDate.getTime());

console.log(Date.now());
// output second mein lane ke liye 

console.log(Math.floor(Date.now()/1000));

// get wale methods 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// 1 for monday 


// `${newDate.getDay()} and the time`


// --------------------------------------Imp hai yad rkhna ------------------------------------

console.log (newDate.toLocaleString('default', {
    weekday: "long",
} ))