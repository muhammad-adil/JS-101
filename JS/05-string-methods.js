
/* Common String methods */

var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = "frontend and backend development";


// charAt(); //returns character at index
console.log(stringOne.charAt(1));


// charCodeAt(); //returns unicode character at index
console.log(stringOne.charCodeAt(1));


// concat() //joins two or more strings and return a new string
console.log(stringOne.concat(stringTwo));


// endsWith()
console.log(stringOne.endsWith("to")) //false


// fromCharCode()
console.log(stringOne.fromCharCode(114));


// includes()
console.log(stringTwo.includes("end")) //true


// indexOf()
console.log(stringTwo.indexOf("end")) //5


// lastIndexOf()
console.log(stringTwo.lastIndexOf("end")) //17


// match()
console.log(stringTwo.match(/end/g));


// repeat()
console.log(stringTwo.repeat(3));


// replace()
console.log(stringTwo.match(/end/g, "END"));


// search()
console.log(stringTwo.search("end"));


// slice()
console.log(stringTwo.slice(2, 4));


// split()
console.log(stringTwo.split(" "));


// startsWith()
console.log(stringOne.startsWith("")); //true


// substr
console.log(stringTwo.substr(2,4));







