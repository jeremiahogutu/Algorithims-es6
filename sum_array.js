const sumAll = (arr) => {
    let newArr = arr.sort((a, b) => a - b);
    let arrSum = 0;

    for (let i = newArr[0]; i <= newArr[newArr.length-1]; i++) {
        arrSum += i;
    }

    return arrSum;
};

console.log(sumAll([1, 4]));