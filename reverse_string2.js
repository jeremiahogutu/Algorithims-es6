// second solution to reversing a string

const reverseString = (str) => {

    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }

    console.log(reversed);
};

reverseString('hello');