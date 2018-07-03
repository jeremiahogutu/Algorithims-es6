const isIPv4Address = (inputString) => {
    const newArr = inputString.split('.');
    for (let char of newArr) {
        if (char > 255 || char < 0 || char === '' || isNaN(char) === true || newArr.length !== 4) {
            return false
        }
    }

    return true
};


console.log(isIPv4Address("172.16.254.1"));