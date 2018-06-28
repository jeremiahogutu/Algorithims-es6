const solve = (a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    console.log(b);
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            scoreA++;
        } else if (a[i] < b[i]) {
            scoreB++;
        }
    }

    return [scoreA, scoreB]
};


console.log(solve([5,6,7], [3,6,10]));