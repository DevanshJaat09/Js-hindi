let gameName = "Devansh_Jaat"
console.log(gameName[0])
console.log(gameName.__proto__);
// yaha pe do _ use hue h 
console.log(gameName.length);
// . lagake method ko access kr skte ho 
console.log(gameName.toUpperCase());
// toUpperCase ke baad bracket lagana hai 
console.log(gameName.charAt(8));
// yaha key values 0 se start hoti hai 
console.log(gameName.indexOf('J'));

const newString = gameName.substring(8,12)
console.log(newString);
// last mein jo value dali hai wo include nhi hoti 
// substring mein negative values nhi de skte 

const anotherString = gameName.slice(-8,12)
console.log(anotherString);
// slice mein negative values de skte h wo reverse mein slice krega 


const newStringOne = "      DEVANSH      "
console.log(newStringOne);
console.log(newStringOne.trim());
// .trim ke baad bas bracket lagado 
const url = "https://www.devanshjaat.netlify.web"
console.log(url.replace('web', 'app'));
console.log(url.includes('devansh'))
console.log(url.includes('divyanshu'));
console.log(gameName.split('_'));

const firstString = new String('JAAT')
console.log(`HUM HAIN ${firstString}`) 

console.log(firstString.anchor()); //<a name="undefined">JAAT</a> *unsupported now
console.log(firstString.at(1)); // A
console.log(firstString.big()); //<big>JAAT</big>
console.log(firstString.blink()); //<blink>JAAT</blink> *unsupported now
console.log(firstString.bold()); //<b>JAAT</b> *unsupported now
console.log(firstString.charAt(3)); // T, If No index is provided, 0 will be used as default, eturns an empty string if index is out of range
console.log(firstString.charCodeAt(1)); //65; The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.






