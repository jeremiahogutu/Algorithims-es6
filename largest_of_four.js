const largestOfFour = (arr) => {
    const maxArray = [];
    for (let char of arr) {
        maxArray.push(Math.max(...char));
    }

    return maxArray;
};

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));