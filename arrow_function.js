
// // function declaration
// function add(first, second = 0) {
//     const total = first + second;
//     return total;
// }
// const result = add(10, 20);
// console.log(result);



// // function expression with annonimus function (function with no name)
// const add1 = function (first, second = 0) {
//     const total = first + second;
//     return total;
// }
// const result = add(10, 20);
// console.log(result);



// // function expression
// const add2 = function add(first, second = 0) {
//     const total = first + second;
//     return total;
// }
// const result = add(10, 20);
// console.log(result);


// arrow function 
const newAdd = (first, second) => first + second;
const result = newAdd(10, 20);
console.log(result);
