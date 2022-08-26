// practice 1
// const add = (a, b = 0) => a + b;
// const result = (10, 20);
// console.log(add(result));

// prctice 2
// write arrow function where it will do the following
// a.it will take an array where the array elements willbe name of your friends
// check if the lenght of each element is even,push elements with even length to a new array and return the result

// const friendsArray = (friends) => friends;

// const friends = ['abul', 'rahim', 'kabul', 'sultan'];
// console.log(friends);




const evenFriends = (array) => {
    let newArray = [];
    for (const friends of array) {
        const friendsLength = friends.length;
        if (friendsLength % 2 === 0) {
            newArray.push(friends);

        }
    }
    return newArray;
}
const array = ['abul', 'kabul', 'jobbar', 'mamun', 'shafiq'];

const result = evenFriends(array);
console.log(result);






// const arr = ['abul', 2, 3, 4, 5];
// console.log(arr[0].length);