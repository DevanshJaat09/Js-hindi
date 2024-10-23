let score = "69"
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof (valueInNumber))
console.log(valueInNumber);

let marks = "69abc"
let grade = Number(marks)
console.log(typeof grade);
console.log(grade);

// string ko number mein convert krenge toh nan aega
// null to number = 0
// undefined to number = NaN
// Boolean true to number = 1
// Boolean false to number = 0
// "33" => 33
// "33abc" => Nan

// boolean conversion

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof (booleanIsLoggedIn));
// "" => false
// "Devansh"=> true


let someNumber = 69
let stringOfSomeNumber = String(someNumber)
console.log(typeof (stringOfSomeNumber));
console.log(stringOfSomeNumber);




