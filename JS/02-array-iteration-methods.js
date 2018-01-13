
//Array Iterations

//forEach
var arr = [1,2,3];

arr.forEach(function(item, index){
	console.log(item, index);
});


// map
const doubled = arr.map(function(item){
	return item * 2;
});
console.log(doubled);


// filter
const ints = [1,2,3,4];
const evens = ints.filter(function(item){
	return item % === 0;
});

console.log(evens);

// reduce
const sum = arr.reduce(function(reduce, item){
	return result + item;
}, 0);
console.log(sum);


// some
var negativeArr = [1, 2, -1, 3, 4, -2, 5, 6, -3];
const hasNegativeNumbers = negativeArr.some(function(item){
	return item < 0;
});
console.log(hasNegativeNumbers);


// every
var positiveArr = [1, 2, 3, 4];
const allPositiveNumbers = positiveArr.every(function(item){
	return item > 0;
});
console.log(allPositiveNumbers);


// find
const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const found = objects.find(function(item){
	return item.id === 'b';
});
console.log(found);


// find index
// const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const foundIndex = objects.findIndex(function(item){
	return item.id === 'b';
});
console.log(foundIndex);













