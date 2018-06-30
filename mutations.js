const mutation = (arr) => {
    const arr1 = arr[0].toLowerCase();
    const arr2 = arr[1].toLowerCase();

    for (let char of arr2) {
        if (arr1.indexOf(char) === -1) {
            return false
        }
    }

    return true
};

mutation(["Alien", "line"]);