const getIndexToIns = (arr, num) => {
    let position = 0;

    const sortedArr = arr.sort((a, b) => a - b);

    for (let char of sortedArr) {
        if (num > char) {
            position++
        }
    }

    if (sortedArr.indexOf(num) === 0) {
        return 0;
    }
    return position;
};

console.log(getIndexToIns([5, 3, 20, 3], 5));