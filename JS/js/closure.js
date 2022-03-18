/**
A closure is a function within a function that has access to the environment that it was created, which gives the ability to access the private methods of outer function to their inner function. In simple words function which is return by another function called closures.

A closure is created when you define a function?—?not when you execute it. Then, every time you execute that function, its already-defined closure gives it access to all the function scopes available around it.
**/




var addCounter = (function () {
  var counter = 0;
	return function () {
		return counter += 1;
	}
})();