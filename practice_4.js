const max = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    const maxNumber = Math.max(...newArray);
    // const maxNumber = parseInt(maxNumberString);
    return maxNumber;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 6, 8, 9, 10];
const result = max(arr1, arr2);
console.log(result);



// const a = [1, 2, 3, 4, 5];
// const max = Math.max(...a);
// console.log(max);