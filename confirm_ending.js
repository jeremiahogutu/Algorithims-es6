const confirmEnding = (str, target) => {
    str = str.replace(/[^\w]/g, '');
    return target === str.slice(-Math.abs(target.length));
};

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));