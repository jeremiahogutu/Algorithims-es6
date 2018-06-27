const stairCase = (n) => {
    let count = 1;

    for (let i = 1; i <  n; i++) {

        let symbolVal = '#'.repeat(i);
        console.log(' '.repeat(n - count)+symbolVal);
        count++;

    }
};

stairCase(6)