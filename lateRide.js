const lateRide = (n) => {
    const timeDigits = `${Math.floor(n/60)}${n%60}`.split('');
    const realDigits = timeDigits.map(Number);
    return realDigits.reduce((a, b) => a + b)
};


console.log(lateRide(808));

