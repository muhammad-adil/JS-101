const items = [
  { name: "Bike", price: 100 },
  { name: "key", price: 30 },
  { name: "Lite", price: 450 },
  { name: "Phone", price: 100 },
  { name: "Computer", price: 850 },
  { name: "Book", price: 200 }
];

// Filter method
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
// console.log(filteredItems)

// Map method
const itemNames = items.map((item) => {
  //   return item.name;
  return item.price;
});
// console.log(itemNames);

// Find method
const foundItem = items.map((item) => {
  return item.name === "Book";
});
// console.log(foundItem);

// forEach
items.forEach((item) => {
  console.table(item.name);
});

// Some method
// Some check 1st one item if it gets 1st conditioning the requirements it will return true or if it did not find anything in the array according to the condition it will return false
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});
// console.log(hasInexpensiveItems);

// Every method
// Every check every item in the array and then return True or Flase.
const checkEveryItem = items.every((item) => {
  return item.price <= 100;
});
// console.log(checkEveryItem);

// Reduce method
//
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
// console.log(total);

const numItems = [1, 2, 3, 4, 5, 6];
// includes method
const includesTwo = numItems.includes(2);
// console.log(includesTwo);
