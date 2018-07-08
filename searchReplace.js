const myReplace = (str, before, after) => {
    let newStr = str.replace(before, after);

    if (before[0] === before[0].toUpperCase()) {
        newStr = str.replace(before, after[0].toUpperCase()+after.slice(1))
    }
    return newStr;
};

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));