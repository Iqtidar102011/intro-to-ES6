// chaining

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'halum', job: "leader" },
        { id: 2, name: 'galum', job: 'leader' }
    ]
}

const firstIdName = data.data[0].name;
// console.log(data.data[0].name)


// optional chaining
// The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

// The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.


const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
//   expected output : undefined, otherwise it would give an error