
/*	for in / for of*/

// for in [loop through property names];
// for of [loop through property values ]


//usage

// for(variable in object){
// 	statements
// }


// for(variable in object){
// 	statement
// }

let person = {firstName: "John", lastName: "Doe", arms: 2};

let arr = [3,5,7];
arr.foo = 'hello';

let text = "";
foo(let x in person){
	text += person[x];
	console.log(x);
};
console.log(text);

/*
for of loop will not work on person because person
is not iterable,
the for in loops through innumerable properties while for
of loops through iterable objects such as array map & sets.
*/

for(let i in arr){
	console.log(i); //"0","1","2","foo"
}

for(let i of arr){
	console.log(i); //3,5,7
}

