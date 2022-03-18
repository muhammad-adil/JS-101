Here are seven JavaScript concepts you must understand before you go into your next JavaScript job interview:


1) Prototypes - JavaScript is a prototype-based language. Even more, it's a delegation-based system, which means that each object has a prototype chain. When you try to access a property on an object, and that property is not found, JavaScript looks at the object's prototype. The prototype is a delegate object, which means that the property lookup is delegated to the prototype object. That object, in turn, may have its own prototype. The search continues up the prototype chain until it reaches the root prototype, which is usually Object.prototype. The best feature of this system is that many object instances can share the same methods on a prototype object, which conserves memory and enables easy code reuse. To assign a prototype to a new object, you can use `Object.create(prototypeObject)`. Prototypal OO is the first course being offered in the "Learn JavaScript" series.

2) Functional Programming - Functional utilities have transformed the way people program JavaScript. With ES5 array extras, the functional paradigm has worked its way into the built-in JavaScript tools. So what is functional programming? If you remember functions from your high school math class, you've already got the basics down. Functional programming uses pure functions. They're stateless, meaning that they rely only on arguments as inputs, and given the same inputs, will always return the same output. These pure functions will also produce no side-effects, meaning that they don't change the state of any outside variable (including the ones that are passed in as arguments). That gives them lots of useful properties. Functional Programming is the 2nd course being offered in the Learn JavaScript series. To get started, learn the array extras, especially .map() and .reduce().

3) Node.js and Express - What do Wal-Mart, Paypal, Microsoft, Yahoo!, Adobe, and thousands of other companies all have in common? They're all placing major bets on Node.js - JavaScript on the server. The reasons include major improvements in application performance, and more cross-functional teams who can more easily work across the full application stack. Express is the most popular application framework for Node. "Node and Express" is the third course being offered in the "Learn JavaScript" series.

4) Asynchronous Programming - JavaScript applications run in a single event loop, but that doesn't mean that we freeze the app while we perform tough calculations and wait for network requests. Asynchronous programming refers to the techniques we use to manage concurrency. In JavaScript, that mostly refers to callback functions, continuations, and promises, but there are some cool tricks coming to ES6 you might want to learn about, too.

5) Closures and Lambdas - An essential topic for any JavaScript developer. A closure is created every time you export a function. Sounds complicated, right? It's not. It happens automatically every time you create a callback function or return a function from another function. They're commonly used for asynchronous programming and to provide private state for objects. You can learn a lot more about them here: http://chimera.labs.oreilly.com/books/1234000000262/ch02.html#closures-section

6) jQuery - Still? You bet. The days when web apps consisted of a wall of jQuery selectors is long over, but jQuery is still commonly used by other libraries to abstract DOM manipulation and smooth over the many remaining cross-browser inconsistencies. You should understand the basics of jQuery, including how to make selections and manipulate DOM properties. You should also understand that jQuery use should be reserved only for manipulating the application views, and it should not be intermingled with domain logic.

7) Any MV* framework. These help you organize your application and provide a separation of concerns. You'll need experience with at least one on your resume. The top contenders are Backbone.js, Angular, and Ember. You might also want to learn about MVP. There's a tiny MVP library called Riot that an experienced JavaScript programmer can learn in an afternoon: https://moot.it/riotjs/



## Classical Inheritance:
    A constructor function instantiates an instance via the “new” keyword. This new instance inherits properties from a parent class.
  
 ## Prototypal Inheritance:
    An instance is created by cloning an existing object that serves as a prototype. This instance—often instantiated using a factory function or “Object.create()”—can benefit from selective inheritance from many different objects.




The future:

Learn about Web Components and get ahead of the next wave of client side application development. You can get started using Google's Polymer project.
