
// compare two strings to determine if they are anagrams
const anagram = (stringA, stringB) => {
    return anagramHelper(stringA) === anagramHelper(stringB)
};


// Helper function
const anagramHelper = (string) => {
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
};

console.log(anagram('RAIL! SAFETY!', 'fairy tales'));