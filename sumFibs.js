const sumFibs = (num) => {
    let currentNum = 1;
    let previousNum = 0;
    let result = 0;

    while (currentNum <= num) {

        if (currentNum % 2 !== 0) {
            result += currentNum;
        }
        currentNum += previousNum;
        previousNum = currentNum - previousNum;
    }

    return result;
};

console.log(sumFibs(4));