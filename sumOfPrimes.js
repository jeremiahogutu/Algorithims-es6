const sumPrimes = (num) => {
    const  newArr = [];

    for (let i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            newArr.push(i)
        }
    }

    return newArr.reduce((a, b) => a + b);
};

const checkPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
};

console.log(sumPrimes(10));