function sayMyName (){
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    
}

sayMyName //reference
sayMyName () //execution


// idhar number1, number2 parameters hain 
function addTwoNumbers (number1, number2 ){

console.log(number1 + number2);

}

addTwoNumbers(3, null)
// 3, null argument hain 

// function ko variable k jaise bhi declare kr skte hain 

// lekin agar value ki tarah declare kroge toh function ko declaration se pehle execute nhi kr skte 



// ----------------------------------- functions revise krlio bohot sare points hain --------------------
// return keyword likhne ke baad ka code execute nhi hoga

function loginUserMessage (username){
    return `${username} Just Logged In`
}

loginUserMessage
console.log(loginUserMessage('Devansh'))
// console.log(loginUserMessage(Devansh))
// error devansh is not defined 

console.log(loginUserMessage(''))
//   Just Logged In

console.log(loginUserMessage())
// undefined Just Logged In 


// "" and undefined are considered as false values 


function userLoggedIn (userid){
    if(userid === undefined){
        console.log("Please Enter A UserID");
        return
    }
    return `${userid} Just Logged In` 
}

console.log(userLoggedIn());
// Please Enter A UserID
// undefined

function userLoggedInTwo(userid) {
    if(!userid){
        console.log("Please Enter A UserID");
        return       
    }
    return `${userid} Just Logged In`
}

console.log(userLoggedInTwo());
// Please Enter A UserID
// undefined


// default value dene ke liye 

function userLoggedInThree (username = "Sammy"){
    return `${username} Just Logged In`
}

console.log(userLoggedInThree());
console.log(userLoggedInThree("Devansh"));


function addNumbers (number1, number2) {
    console.log(number1 + number2);
    
}

const result = addNumbers(3,4)
console.log("Result: ", result);
// 7
// Result:  undefined
// console likhne se sirf value print hoti hai value function ko return nahi hoti 


// right way 

function addingNumbers (numb1, numb2) {
    let output = numb1 + numb2
    return output
}

let output = addingNumbers(3,5)
console.log("Result: ", output);
