const addBorder = (picture) => {

    const arrSize = picture[0].length+2;

    const topBorder = '*'.repeat(arrSize);

    let arr = picture.map(x => '*'+x+'*');

    arr.push(topBorder);
    arr.unshift(topBorder);

    return arr;
};

console.log(addBorder(["abs"]));