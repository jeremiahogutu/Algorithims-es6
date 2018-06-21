const capitalize = (str) => {
    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    return words.join(' ');
};

console.log(capitalize('a short sentence'));