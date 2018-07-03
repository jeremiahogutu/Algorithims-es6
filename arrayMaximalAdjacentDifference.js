const arrayMaximalAdjacentDifference = (inputArray) => {
    const maxDiff = [];

    for (let i = 0; i < inputArray.length - 1; i++) {
        maxDiff.push(Math.abs(inputArray[i] - inputArray[i + 1]))
    }

    console.log(maxDiff);

    return Math.max(...maxDiff);
};

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));