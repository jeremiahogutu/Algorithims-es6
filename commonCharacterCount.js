// find the common characters between two strings


const commonCharacterCount = (s1, s2) => {

    for (let char of s1) {
        s2 = s2.replace(char, '!')
    }

    return s2.replace(/[^!]/g, '').length

};


commonCharacterCount('aabcc', 'adcaa');