const allLongestStrings = (inputArray) => {

    let max = 0;
    const longest = [];

    for (let char of inputArray) {
        if (char.length > max) {
            max = char.length
        }
    }
    for (let char of inputArray) {
        if (char.length === max) {
            longest.push(char)
        }
    }
    return longest
};

allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']);