const truthCheck = (collection, pre) => {
    // Is everyone being true?
    return collection.every((obj) => {
        return obj[pre]
    })
};

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") );