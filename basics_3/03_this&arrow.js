
// this reffers to the current context 

const user = {
    username : "Dinu",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to the website`)
    }
}

user.welcomeMessage()
// Dinu, Welcome to the website

user.username = "Devansh"
user.welcomeMessage()
// Devansh, Welcome to the website

console.log(this);
// {}
// browser ke andar 
console.log(this);
// window object

let name = {
    id : "abcd",
    pass : 1234,
    loginMessage : function(){
        console.log(`${this.id}, Just Logged IN`);
        console.log(this)
    }
    
}

name.loginMessage()
// abcd, Just Logged IN
// { id: 'abcd', pass: 1234, loginMessage: [Function: loginMessage] }

name.id = "devansh"
name.loginMessage()
// { id: 'devansh', pass: 1234, loginMessage: [Function: loginMessage] }

function chai (){
    let username = "hitesh"
    console.log(this)
}

chai()
// bohot sara output ata hai 

function or (){
        let username = "devansh"
        console.log(this.username)
}

or()
// undefined
// functions ke andar this keyword use nhi kr pate 

const code = function (){
    let username = "jaat"
    console.log(this.username);
    
}

code()
// undefined  

const sass = () => {
    let username = "hitesh"
    console.log(this.username);
    console.log(this);
    
    }

sass()
// undefined 
// {} 

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))
// 7

//  implicit return 
//  ek line ka statement hai return likhne ki need nhi hai 
//  explicit return mein return keyword use krna padta hai 
let addOne = (num1, num2) => num1 + num2

console.log(addOne(4,5));
// 9 

const hello = (num1, num2) => (num1 + num2)
console.log(hello(5,5));
// 10 

// { } mein wrap kroge toh return keyword likhna padega,
// ( ) mein wrap kroge toh return keyword nhi likhna padta

const objectReturn = () => ({username : "devansh"})
console.log(objectReturn());
// { username: 'devansh' } 

//  In normal functions, the this keyword represents the object that called the function. 
// In arrow functions, the this keyword always represents the object that defined the arrow function. 

