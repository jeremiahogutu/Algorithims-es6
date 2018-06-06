/*
* ----------------------------------------------------------------------------------------
*  Given a year, return the century it is in. The first century spans from the year 1 up to
*  and including the year 100, the second - from the year 101 up to and including the year
*  200, etc.
* ----------------------------------------------------------------------------------------
*/

// The Math.ceil() function returns the smallest integer greater than or equal to a given number.
const centuryFromYear = (year) => Math.ceil(year/100);

// For year 1905 the function should return 20
console.log(centuryFromYear(1905));