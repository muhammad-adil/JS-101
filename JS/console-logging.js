console.log("hello world");
console.log("hello", "world");
console.log({foo: "bar", nested: {nested_value: "foobar"} });
console.log("hello my name is %s and i am %d years old and here is %o", "Adil", 24, {foo:"bar"});

//add css to console
console.log("this is my %coutput", "color:blue; font-size:33px;")


console.warn("this is a warning");
console.info("this is info");
console.error("this is an error");

console.debug("this is debug");


for(var i = 0; i < 100; i++){
	var num = Math.random() * 100;
	console.log("Picking a random number!");
	console.log("\tNumber greater than 10?*" num > 10);
	console.log("\tNumber greater than 50?*" num > 50);

	//console by group
	console.group("Picking a random number!");
	console.log("Number greater than 10?*" num > 10);
	console.log("Number greater than 50?*" num > 50);
	console.groupEnd();


	//console by groupCollapsed
	console.groupCollapsed("Picking a random number!");
	console.log("Number greater than 10?*" num > 10);
	console.log("Number greater than 50?*" num > 50);
	console.groupEnd();


	//console by groupCollapsed Nested
	console.groupCollapsed("Picking a random number!");
	console.log("Number greater than 10?*" num > 10);
	console.log("Number greater than 50?*" num > 50);
	console.groupCollapsed("Nested log group!");
	console.log(i);
	console.groupEnd();	
	console.groupEnd();
}


//console.assert
var foo = undefined;
console.assert(foo, "Foo wasn't set");


//count events
var numGreaterThan50 = 0;
var numLessThan50 = 0;

for(var i = 0; i < 100; i++){
	var num = Math.random() * 100;

	if( num > 50 ){
		// console.log("Greater than 50!", ++numGreaterThan50);
		console.count("Greater than 50")
	} else {
		// console.log("Less than 50!" , ++numLessThan50);
		console.count("Less than 50")
	}
}

//log timing
console.time("createObjects");

var array = [];
for(var i = 0; i < 10000; i++){
	array.push({index: i })
}

console.timeEnd("createObjects")






