const simpleArraySum = (ar) => {

    let sum = 0;

    for (let char of ar) {
        sum += char;
    }

    return sum;
};


console.log(simpleArraySum([1,2,3,4,10,11]));