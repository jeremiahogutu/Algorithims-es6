const rot13 = (str) => { // LBH QVQ VG!
    let chars = str.split('');
    return chars.map((letter) => {
        letter = letter.charCodeAt();

        if (letter >= 65 && letter <= 77) {
            letter += 13;
        } else if (letter >= 78 && letter <= 90) {
            letter -= 13;
        }

        return String.fromCharCode(letter);
    }).join('');
};

// Change the inputs below to test
rot13("SERR PBQR PNZC");