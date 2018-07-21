const steamrollArray = (arr) => {
    // I'm a steamroller, baby
    const justDigits = [].concat(...arr);
    return justDigits.some(Array.isArray) ? steamrollArray(justDigits) : justDigits;
};

console.log(steamrollArray([1, [2], [3, [[4]]]]));
