// write an arrow function ---
// a. square each element;
// b, calculate sum of squared elements
// return average of the sum of squared elements



const average = (num) => {
    let squaredArray = [];
    let sum = 0;

    for (const element of num) {
        const squaredElement = element * element;
        squaredArray.push(squaredElement);


    }
    for (elements of squaredArray) {
        sum = sum + elements;
    }

    const avg = sum / squaredArray.length;
    return avg;
}


const numArray = [1, 2, 3, 4, 5];
const result = average(numArray);
console.log(result);