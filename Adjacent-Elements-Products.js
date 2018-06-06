inputArray = [3, 6, -2, -5, 7, 3];

// Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

const adjacentElementsProduction = (arr) => Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]));

// should return 21
console.log(adjacentElementsProduction(inputArray));