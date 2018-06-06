/*
* ----------------------------------------------------------------------------------------
*  Given the string, check if it is a palindrome
* ----------------------------------------------------------------------------------------
*/

// The split() method is used to split a string into an array of substrings, and returns the new array.
// The reverse() method reverses the order of the elements in an array.
// The join() method joins the elements of an array into a string, and returns the string.

const inputString = (str) => str.split('').reverse().join('');

// Here we compare the original string to the reversed string to check if they match
const checkPalindrome = (str) => str === inputString(str);

// 'aabaa' should return true
console.log(checkPalindrome('aabaa'));