const chunkArrayInGroups = (arr, size) => {

    const chunked = [];
    let index = 0;

    while (index < arr.length) {
        chunked.push(arr.slice(index, index + size));
        index += size
    }
    return chunked;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));