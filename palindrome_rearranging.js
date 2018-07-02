const palindromeRearranging = (inputString) => {
    const charMap = {};
    let count = 0;

    for (let char of inputString) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] % 2 !== 0) {
            count++        }
    }

    console.log(charMap);

    return count > 1 ? false : true;
};

console.log(palindromeRearranging('abbcabb'));