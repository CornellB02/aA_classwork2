/******************************************************************************
** Write a function average(num1, num2) that returns the average of two numbers.
**
** Examples:
**
** average(10, 20); // => 15
** average(5, 7); // => 6
** average(24, 32); // => 28
*/

function average(num1, num2) {
  return (num1 + num2) / 2
}

console.log(average(10, 20))
console.log(average(5, 7))
console.log(average(24, 32))
console.log(average(20044, 3939942))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = average;
