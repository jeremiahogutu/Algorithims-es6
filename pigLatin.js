const translatePigLatin = (str) => {
    const regex = /[aeiou]/g;

    if (str[0].match(regex)) {
        return str+'way';
    }


    for (let char of str) {
        if (char.match(regex)){
            let position = str.indexOf(char);
            return str.substring(position) + str.substring(0, position)+'ay';
        }
    }

    return str + 'ay';
};

console.log(translatePigLatin('glove'));