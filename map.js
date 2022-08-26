// array.map
// purpose: 1.get an array
// for every element of the array -- do something
// return the resulted array



const numbers = [2, 3, 1, 5, 3, 10];
const doubleIt = (num) => num * 2;
const makeDouble = numbers.map(doubleIt);
// arrow function can also be directly written inside of map()

const makeDouble2 = numbers.map((num) => num * 2)
// simply written as x also;
const makeDouble3 = numbers.map(x => x * 2);
console.log(makeDouble);
console.log(makeDouble2);
console.log(makeDouble3);



const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);


// get first letters from an string of array
const firstLetters = ['rahim', 'karim', 'jahir', 'sagor'].map(friend => friend[0]);
console.log(firstLetters);

// map()can also be applied on aeeay of objects

// const products = [
//     { id: 1, name: 'laptop', price: 50000 },
//     { id: 2, name: 'mobile', price: 20000 },
//     { id: 3, name: 'watch', price: 23000 },
//     { id: 4, name: 'phone', price: 19000 },
//     { id: 5, name: 'ps4', price: 50000 },
// ]


// const totalPrice = products.map(product => {
//     let sum = 0
//     const price = product.price;
//     // price.map(x => x + sum);
//     sum = price.map(x => x + sum);
//     return sum;

// }

// );
// console.log(totalPrice);