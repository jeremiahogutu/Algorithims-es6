function destroyer(arr) {
    let newArr = arr;

    for (let i in arguments) {
        newArr = newArr.filter(x => x !== arguments[i]);
    }

    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));