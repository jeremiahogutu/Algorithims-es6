function whatIsInAName(collection, source) {
    // What's in a name?
    // Only change code below this line
    const srcKey = Object.keys(source);

    return collection.filter((obj) => {
        return srcKey.every((key) => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
    })

    // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });