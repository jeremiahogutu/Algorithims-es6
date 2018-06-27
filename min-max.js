// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.


const minMaxSum = (arr) => {
    let skipper = 0;
    let sum = 0;
    const sumArray = [];

    while (skipper < arr.length) {
        for (let i = 0; i < arr.length; i++) {
            if (skipper === i) {
                continue
            } else {
                sum += arr[i];
            }
        }
        sumArray.push(sum);
        sum = 0;
        skipper++
    }

    console.log(`${Math.max(...sumArray)} ${Math.min(...sumArray)}`)
};

minMaxSum([1,2,3,4,5])