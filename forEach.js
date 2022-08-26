// forEach will not return any value

const numbers = [2, 3, 1, 5, 3, 10];

numbers.forEach(x => console.log(x * 2));


// example 2 

const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 2, name: 'mobile', price: 20000 },
    { id: 3, name: 'watch', price: 23000 },
    { id: 4, name: 'phone', price: 19000 },
    { id: 5, name: 'ps4', price: 50000 },
]

products.forEach(n => console.log(n.name));
