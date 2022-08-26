const obj = {
    key1: 1,
    key2: 2,
    key3: 3,
    key4: 4


}
// const key1=obj.key1;
// const key2=obj.key2;
// this can be written like this : 
const { key1 } = obj;
console.log(key1);

// example 2
const { age, occupation } = { name: 'x', age: 27, occupation: 'student' };
console.log(age, occupation);

// array destructuring

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first);

function getNames() {
    return ['alim', 'halim'];
}
const [father, son] = getNames();
console.log(son, father);

