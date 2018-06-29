const titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    let finalWords = [];
    for (let char of str) {
        finalWords.push(char[0].toUpperCase()+char.slice(1));
    }
    return finalWords.join(' ');
};

console.log(titleCase("sHoRt AnD sToUt"));