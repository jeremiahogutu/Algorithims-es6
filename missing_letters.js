const fearNotLetter = (str) => {
    const charNum = str.split('').map((letter) => letter.charCodeAt());
    for (let i = 0; i < charNum.length; i++) {
        if (charNum[i + 1] - charNum[i] > 1) {
            return String.fromCharCode(charNum[i] + 1);
        }
    }
    return 'no missing letters';
};

console.log(fearNotLetter('abce'));