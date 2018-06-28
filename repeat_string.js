const repeatStringNumTimes = (str, num) => {

    let arr =[str];

    if (num < 0) {
        return ''
    }

    for (let i = 1; i < num; i++) {
        arr.push(str)
    }
    return arr.join('');
};


console.log(repeatStringNumTimes("abc", 3));