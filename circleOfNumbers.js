const circleOfNumbers = (n, firstNumber) => {
    return (firstNumber + n/2) % n
};

console.log(circleOfNumbers(10, 7));