const vowels = (str) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
};

console.log(vowels('hello world!!'));