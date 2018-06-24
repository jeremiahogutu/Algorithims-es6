const vowels = (str) => {
    let count = 0;
    const vowelCheck = 'aeiou';

    for (let char of str) {
        if (vowelCheck.includes(char)) {
            count++
        }
    }
    return count
};

console.log(vowels('Hello'));