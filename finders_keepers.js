const findElement = (arr, func) => {
    for (let char of arr) {
        if (func(char)) {
            return char
        }
    }
};

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));