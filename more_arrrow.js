// no parameter arrow function


const getPie = () => 3.14;

// one parameter;

const doubleIt = (num) => num * 2;
// one parameter simple version

const fiveTimes = num => num * 5;

// multiline arrow function
// if ypu want to return something, use the return function


const doMath = (a, b, c) => {
    const firstSum = a + b;
    const secondSum = b + c;
    const result = firstSum * secondSum;
    return result;
}