/* Closures	*/


// let i = 1

// const f = () => {
// 	console.log(i);
// }

// f();



let f;
if(true){
	let i = 1;
	f = () => {
		console.log(i)
	}
}

f();

//----------------------------

let func = () => {
	let i = 1;
	return () => {
		console.log(i);
	}
};
console.dir(func())


//--------------------------------

for (let i = 0; i < 3; i++){
	setTimeout(() => {
		console.log(i);
	}, 1000);
}
console.log('after the loop')


//-----------------------------------

for (var i = 0; i < 3; i++){
	((i) => {
		setTimeout(() => {
			console.log(i);
		}, 1000);
	})(i);
}

console.log('after the loop')
