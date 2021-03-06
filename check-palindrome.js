/*
* ----------------------------------------------------------------------------------------
*  Given the string, check if it is a palindrome
* ----------------------------------------------------------------------------------------
*/

// split() method is used to split a string into an array of substrings, and returns the new array.
// reverse() method reverses the order of the elements in an array.
// join() method joins the elements of an array into a string, and returns the string.

// Here we compare the original string to the reversed string to check if they match

const checkPalindrome = (str) => str.split('').reverse().join('') === str;

// 'aabaa' should return true
console.log(checkPalindrome('aabaa'));