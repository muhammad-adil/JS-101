// Variable -> PASS by value
var a = 'Value of A';
var b = a;
var c = b;

c = "new value set by C";


//Object   -> Pass by reference
var a = {
	val: "Value is A"
};
var b = a;
var c = b;

c.val = "new value set by C";
