//  for

// use ctrl + d to select all duplicates at same time 

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    
}


// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


for (let i  = 0; i  < 4; i ++) {
    const element = i;
    if (element === 3){
        console.log("3 Is The Best Number");
        
    }
    console.log(element);
    
}

// 0
// 1
// 2
// 3 Is The Best Number
// 3

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

// continue -> ek baar maaf krdo, 
// idhar Value of i is 5 ko chor ke aage wala sara print hoga 

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
// flash
// batman
// superman