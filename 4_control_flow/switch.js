// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let month = 3 

//  Press Shift + Alt + Down Arrow

switch (month) {
    case 1:
        console.log("Month Is January");
        break;
    case 2:
        console.log("Month Is February");
        break;
    case 3:
        console.log("Month Is March");
        break;
    case 4:
        console.log("Month Is April");
        break;

    default:
        console.log("Manne Koni Bera")
        break;
}

// Month Is March 

// Break keyword control flow ko break kr deta hai 
// agar break use nhi krenge toh jaha case match hoga uske age ka sara code execute hogea except default 


let age = 17 

switch (age) {
    case 17:
        console.log("You Are A Child");
        // break;
    case 18:
        console.log("You Are An Adult");
        break;

    default:
        console.log("Break Ka Use");
        
        break;
}
// You Are An Adult

let name = "Dinu"

switch (name) {
    case "Kuki":
        console.log(`${name} IS RAND`);
        break;
    case "Dinu":
        console.log(`${name} IS RAND`);
        break;
    case "Motu":
        console.log(`${name} IS RAND`);
        break;

    default:
        console.log("You Are Rand");
        
        break;
}
// Dinu IS RAND