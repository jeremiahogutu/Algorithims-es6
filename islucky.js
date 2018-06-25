const isLucky = (n) => {

    n = n.toString().split('').map(Number);
    const midpoint = n.length/2;

    let test = 0;
    let test2 = 0;

    const arr1 = n.slice(0, midpoint);
    const arr2 = n.slice(midpoint);

    for (let i = 0; i < midpoint; i++) {
        test = arr1[i] + test;
        test2 = arr2[i] + test2;
    }

    return test === test2
};

isLucky(1230);