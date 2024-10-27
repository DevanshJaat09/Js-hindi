const marvel_heroes = ["Iron Man", "Thor", "Captian America"]
const dc_heroes = ["Super Man", "Bat Man", "Flash"]

// marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)

// isse marvel_heroes array ke andar dc_heroes array ki form mein add ho jaega 

// console.log(marvel_heroes[3][1]);

// concat use krte hue dhyan dena kyuki wo dono arrays ko combine krke new array deta hai 

const sexyArray = marvel_heroes.concat(dc_heroes)
console.log(sexyArray);

// --------------------------------Same cheeze krne ka ek or tareeka -------------------------------------

const nayaArray = [...marvel_heroes, ...dc_heroes]
console.log(nayaArray);

// -----------------------------isko spread bolte h ye sabhi array k elements ko alag alag kr deta h 

const chutiyaArray = [1,2,3,4,[5,6,7,[8,9,10]]]
const bhadwaArray = chutiyaArray.flat(Infinity)
console.log(bhadwaArray);

// agar kahi array k andr array k andar array etc ho toh ise use kro 

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));