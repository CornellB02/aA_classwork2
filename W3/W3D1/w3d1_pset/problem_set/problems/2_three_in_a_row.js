/***********************************************************************
Write a function `threeInARow(arr)` that takes in an array of numbers
and returns true if the array contains 3 of the same number
consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;
***********************************************************************/

function threeInARow(arr) {
    for (let i = 0; i < arr.length - 2; i++){
        ele = arr[i]
        ele1 = arr[i + 1]
        ele2 = arr[i + 2]
        if (ele === ele1 && ele1 === ele2){
            return true 
        }
    }
    return false
}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]))
console.log(threeInARow([10, 9, 20, 33, 3, 3]))




// Write a function `power(base, exp)` that takes in two numbers, a base
// and exponent. The function should return `base` raised to `exp` power.
// Solve this using a loop.

// For example, power(2, 5) is 2 raised to the 5th power,
// which is 2 * 2 * 2 * 2 * 2 = 32

// Examples:

// power(2, 5); 
// power(2, 10); 
// power(9, 2); 
// power(9, 3); 
// power(11, 0); 
// power(11, 1); 

function power(base, exp){
    product = 1
    for(let i = 0; i < exp; i++){
        product *= base
    }
    return product
}

console.log(power(9, 3))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeInARow;
