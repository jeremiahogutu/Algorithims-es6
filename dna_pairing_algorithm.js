const pairElement = (str) => {
    const newStr = str.split('');
    const finalArray = [];
    for (let i = 0; i < str.length; i++) {
        switch (newStr[i]) {
            case 'G':
                finalArray.push(['G','C']);
                break;
            case 'C':
                finalArray.push(['C','G']);
                break;
            case 'A':
                finalArray.push(['A','T']);
                break;
            case 'T':
                finalArray.push(['T','A'])
        }
    }
    return finalArray;
};

console.log(pairElement("GCG"));