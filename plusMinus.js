// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

const plusMinus = (arr) => {
    let posNumbers = 0;
    let negNumbers = 0;
    let zeroNumbers = 0;

for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] > 0) {
        posNumbers++;
    }  else if (arr[i] < 0) {
        negNumbers++
    } else {
        zeroNumbers++;
    }
}
   console.log((posNumbers/arr.length).toFixed(6));
   console.log((negNumbers/arr.length).toFixed(6));
   console.log((zeroNumbers/arr.length).toFixed(6));

};

plusMinus([-4, 3, -9, 0, 4, 1]);