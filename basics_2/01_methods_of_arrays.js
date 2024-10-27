let myArr = [1,2,3,4,5]

myArr.push(6)
myArr.push(7)
myArr.pop()       
// pop last value ko remove kr dega 



myArr.unshift(9)
myArr.shift()
// shift pehle element ko remove kr dega 
console.log(myArr);
// array ki starting mein 9 add hojaega 

console.log(myArr.includes(9));
console.log(myArr.indexOf(6));


const newArr = myArr.join()
// array ko string banadia elements wahi rahenge 
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) 
console.log("C", myArr);
console.log(myn2);

// splice original array ko bhi manipulate kr deta hai slice nhi krta 

// slice(x,y) mein y ko chor deta hai splice(x,y) mein y bhi include ho jata hai  






