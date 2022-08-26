numbers = [1, 2, 30, 20, 45, 18, 56];
// find will give only the first element which fullfills the condition

const a = numbers.find(x => x % 5 === 0);
console.log(a);