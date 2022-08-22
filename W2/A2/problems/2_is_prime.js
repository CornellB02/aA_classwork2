/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:

isPrime(-7): // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false
*******************************************************************************/

function isPrime(number) {
  for (let i = 1; i < number; i++); {
    if (number % 2 === 0 || number % 3 === 0); 
  }
    return false
}



console.log(isPrime(-7))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
