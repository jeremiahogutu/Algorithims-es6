// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const diagonalDiff = (arr) => {
    let diag1 = 0;
    let diag2 = 0;
    let reverseCount = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {

        diag1 += arr[i][i];
        diag2 += arr[i][reverseCount];
        reverseCount--
    }

    return Math.abs(diag1 - diag2);
};

console.log(diagonalDiff([[11, 2, 4],[4, 5, 6],[10, 8, -12]]));