const findLongestWordLength = (str) => {
    str = str.split(' ');
    let longest = 0;
    for (let char of str){
        if (char.length > longest) {
            longest = char.length;
        }
    }
    return longest;
};

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));