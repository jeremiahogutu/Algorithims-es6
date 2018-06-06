# Algorithims-es6


----------------------------------------------------------------------------------------
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year  200, etc.
----------------------------------------------------------------------------------------


The Math.ceil() function returns the smallest integer greater than or equal to a given number.

``const centuryFromYear = (year) => Math.ceil(year/100);``

For year 1905 the function should return 20

``console.log(centuryFromYear(1905));``



----------------------------------------------------------------------------------------
  Given the string, check if it is a palindrome
----------------------------------------------------------------------------------------

split() method is used to split a string into an array of substrings, and returns the new array.

reverse() method reverses the order of the elements in an array.

join() method joins the elements of an array into a string, and returns the string.

``const inputString = (str) => str.split('').reverse().join('');``

Here we compare the original string to the reversed string to check if they match

``const checkPalindrome = (str) => str === inputString(str);``

'aabaa' should return true

``console.log(checkPalindrome('aabaa'));``