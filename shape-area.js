/*
* ----------------------------------------------------------------------------------------
*  Increasing area for polygons
* ----------------------------------------------------------------------------------------
*/

// The pow() method returns the value of x to the power of y (xy).
const shapeArea = (n) => Math.pow(n,2)+Math.pow((n-1),2);

console.log(shapeArea(3));

