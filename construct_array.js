// Given an integer size, return an array containing each integer from 1 to size in the following order:
//
//     1, size, 2, size - 1, 3, size - 2, 4, ...
//
// Example
//
// For size = 7, the output should be
// constructArray(size) = [1, 7, 2, 6, 3, 5, 4].

const constructArray = (size) => {
    const newArr = [];
    let count = 0;

    for (let i = 1; i <= size; i++) {

        if (newArr.length < (size)) {
            newArr.push(i);
        }

        if (newArr.length < (size)) {
            newArr.push(size - count)
        }

        count++;
    }

    return newArr
};

console.log(constructArray(7));