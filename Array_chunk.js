const chunk = (array, size) => {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
};


console.log(chunk([2,3,45,6,7,8,9,12], 3));