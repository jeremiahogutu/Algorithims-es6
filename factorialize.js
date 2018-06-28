const factorialize = (num) => {
    let newVal = 1;

    for (let i = 1; i <= num; i++) {
        newVal = newVal * i;
    }

    return newVal;
};

factorialize(5);