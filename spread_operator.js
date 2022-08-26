numbers = [1, 2, 3, 4];
// console.log(numbers);
// console.log(...numbers);



const a = [1, 2, 3, 4];
const b = [11, 12, 13, ...a, 8, 9, 10];
a.push(55);
// b.push(77);
console.log(a);
console.log(b);

// new element can also be added