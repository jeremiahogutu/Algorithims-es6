const avoidObstacles = (inputArray) => {
    const newArr = inputArray.sort((a, b) => a - b)
    const lastVal = newArr[newArr.length - 1];

    for (let i = 1; i <= lastVal + 1; i++) {
        if (newArr.every((element) => element % i != 0)){
            return i;
        }
    }

};

console.log(avoidObstacles([2,3]));