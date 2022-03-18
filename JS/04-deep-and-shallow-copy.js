


// # Copying Arrays
var original = [true, true, undefined, false, null];


// Slice
var copy1 = original.slice(0);


// Spread operator
var copy2 = [...original];
console.log(copy1, copy2);


// DEEP Copying
var deepArray = [["freecodecamp"]];
var shallowCopy = deepArray.slice(0);


// shallowCopy.push("is great");
// console.log(deepArray[0], shallowCopy[0]);

// deepCopy
var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy.push("is great");
console.log(deepArray[0], deepCopy[0]);




