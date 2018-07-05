function uniteUnique(arr) {
    const args = Array.prototype.slice.call(arguments);
    const newArr = args.reduce((a, b) => a.concat(b));
    const finalArr = [];

    for (let i = 0; i < newArr.length; i++) {
        if (!finalArr.includes(newArr[i])) {
            finalArr.push(newArr[i]);
        }
    }
    return finalArr;
}

console.log(uniteUnique([1,3,2], [5,2,1,4], [2,1]));