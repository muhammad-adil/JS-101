//A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.

// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() * 100 <= 90) {
//         resolve('Hello, Promises!');
//     }
//     reject(new Error('I fail..'));
// });

const myProimse = new Promise((resolve, reject) => {
  if (Math.random() * 100 < 90) {
    reject(new Error('The promise was rejected by using reject function.'));
  }
  throw new Error('The promise was rejected by throwing an error');
});

myProimse.then(
  () => console.log('resolved'), 
  (error) => console.log(error.message)
);
// Output (in 90% of cases)
// The promise was rejected by using reject function.


//.catch is just a syntactical sugar for .then(undefined, onRejected).
// myProimse.catch(
//   (error) => console.log(error.message)
// );

//chaining
const delay = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
);

//resolve after delay
// delay(5000).then(() => console.log('Resolved after 5 seconds'));

//---------------------------------------------------------------------------------
const delay = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
);

delay(2000)
  .then(() => {
    console.log('Resolved after 2 seconds')
    return delay(1500);
  })
  .then(() => {
    console.log('Resolved after 1.5 seconds');
    return delay(3000);
  }).then(() => {
    console.log('Resolved after 3 seconds');
    throw new Error();
  }).catch(() => {
    console.log('Caught an error.');
  }).then(() => {
    console.log('Done.');
  });

// Resolved after 2 seconds
// Resolved after 1.5 seconds
// Resolved after 3 seconds
// Caught an error.
// Done.

//---------------------------------------------------------------------
const promiseThatResolves = () => new Promise((resolve, reject) => {
  resolve();
});

// Leads to UnhandledPromiseRejection
promiseThatResolves().then(
  () => { throw new Error },
  (err) => console.log(err),
);

// Proper error handling
promiseThatResolves()
  .then(() => {
    throw new Error();
  })
.catch(err => console.log(err));

