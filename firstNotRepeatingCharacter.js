// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

const firstNotRepeatingCharacter = (s) => {

    for (let i = 0; i < s.length; i++ ) {
        if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
            return s.charAt(i);
        }
    }

    return '_'

};

console.log(firstNotRepeatingCharacter('abacabaabacaba'));