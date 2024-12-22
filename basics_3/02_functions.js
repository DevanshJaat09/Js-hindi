// agar pata na ho kitne items aane wale hai or sabko add krna ho toh 

// ... => rest/ spread operator 

function calculateCartPrice (...num1) {
    return num1
} 

console.log(calculateCartPrice(2));
// 2
console.log(calculateCartPrice(200,300,400));
// [ 200, 300, 400 ]

function newPrice (val1, val2, ...num1) {
    return num1
}

console.log(newPrice(200,300,400,500,600));
// [ 400, 500, 600 ]

const newObject = {
    name : "Devansh",
    marks : 100
}

function objectHandling (anyObject) {
    console.log(`My name is ${anyObject.name} and I have scored ${anyObject.marks} marks`);
    
}

// objectHandling(newObject)
// My name is Devansh and I have scored 100

objectHandling({
    name : "Divyanshu",
    nickName : "Devansh",
    marks : 100 
})
// My name is Divyanshu and I have scored 100 marks

let newArray = [100,200,300,400]

function arrayHandling (anyArray){
    console.log(anyArray[2]);
    
}

// arrayHandling(newArray)
// 300

arrayHandling([10,20,30,40,50])
// 30