const bouncer = (arr) => {
    const result = [];

    for (let char of arr) {
        if (char) {
            result.push(char);
        }
    }
    return result;
};

console.log(bouncer([7, "ate", "", false, 9]));