var arr = ["a", "b", "c", "d", "e", "f"];


//push //add an element in an array //(modifies the original array)
arr.push("d");
console.log(arr);


//pop // remove last element from an array  //(modifies the original array)
console.log(arr.pop())


//Concat //Concatenate two aarrays to make one //(does not modifies the original array)
var arr2 = ["g", "q"];
console.log(arr.concat(arr2));


//Join //attach with each item of an array //(does not modifies the original array)
console.log(arr.join("!"));


//Reverse //(modifies the original array)
console.log(arr.reverse());


//Shift //remove and returns the first element //(modifies the original array)
console.log(arr.shift())


//Unshift //add element at the begining of an array //(modifies the original array)
console.log(arr.unshift("p"));


//Slice //slice(start, -1); //(does not modifies the original array)
console.log(arr.slice(1, 3));


//Sort //Modify original array
console.log(arr.sort(arr));


//Splice //start, no of items to count to remove from start, add //(modifies the original array)
console.log(arr.splice(2,2, "JS Nuggets"));

