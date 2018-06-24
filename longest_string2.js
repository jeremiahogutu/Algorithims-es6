const allLongestStrings = (inputArray) => {

    let max = Math.max(inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === max )
};

allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']);