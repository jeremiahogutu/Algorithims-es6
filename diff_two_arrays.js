const diffArray = (arr1, arr2) => {
    const diff1 = arr1.filter(x => !arr2.includes(x));
    const diff2 = arr2.filter(x => !arr1.includes(x));

    return diff1.concat(diff2);
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));