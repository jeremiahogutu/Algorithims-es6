// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

const firstDuplicate = (a) => {
    const numMap = {};

    for (let i = 0; i < a.length; i++) {
        if (numMap.hasOwnProperty(a[i])) {
            return a[i];
        } else {
            numMap[a[i]]='Not a duplicate'
        }
    }
    return -1
};

firstDuplicate('abacabad');