// for of

// ["", "", ""]
// [{}, {}, {}]

// for (const element_name of object) {
    
// }

// object matlab kis cheeze pe loop lagana hai 

let myArr = [1,2,3]
for (const num of myArr) {
    console.log(num);
}
// 1
// 2
// 3

const name = "Dev"
for (const greet of name) {
    console.log(`Each Char Is ${greet}`);  
}
// Each Char Is D
// Each Char Is e
// Each Char Is v

// Maps

// object jaisa hota hai or order of insertion ko yad rkhta hai, sari values unique hoti hai.  

const map = new Map()
map.set('In', 'India')
map.set('Ru', 'Russia')
map.set('Nl', 'Netherlands')
map.set('Fr', 'France')

console.log(map);
// Map(4) {
    //     'In' => 'India',
    //     'Ru' => 'Russia',
    //     'Nl' => 'Netherlands',
    //     'Fr' => 'France'
    //   }


map.set('Fr', 'France')
map.set('Fr', 'Israil')
console.log(map);
// Map(4) {
//     'In' => 'India',
//     'Ru' => 'Russia',
//     'Nl' => 'Netherlands',
//     'Fr' => 'Israil'
//   }

for (const key of map) {
    console.log(key);
    
}
// [ 'In', 'India' ]
// [ 'Ru', 'Russia' ]
// [ 'Nl', 'Netherlands' ]
// [ 'Fr', 'Israil' ]

for (const [key, value] of map) {
    console.log(key, ':-' ,value);
}
// In :- India
// Ru :- Russia
// Nl :- Netherlands
// Fr :- Israil

const myObject = {
    game1 : "FreeFire",
    game2 : "ClashOfClans"
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
// error
// myObject is not iterable
