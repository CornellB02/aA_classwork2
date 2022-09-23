// const numberPrimes = require("./1_number_primes");

/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/
function isPrime(num) {
  if (num < 2){
    return false;
  }
  
  for (let i = 2; i < num; i++){
    if (num % i === 0){
      return false ;
    }
  }
  return true 
  }

  function primeNums(number) {

    let arr = []
    for (let i = 0; i < number; i++){
      if(isPrime(i)){
        arr.push(i)
        // console.log(arr)
      }
    }
    return arr[arr.length - 1]
}

function previousPrimeArray(array) {
  
  let arr = []
  for (let i = 0; i < array.length; i++){
    let primeNum = (isPrime(array[i]))
    if(primeNum){
      if(primeNums(array[i]) === undefined){
        arr.push(null)
      } else {
        arr.push(primeNums(array[i]))

      }
    } else {
      arr.push(array[i])
    }
  }
  return arr
}


console.log(previousPrimeArray([17, 24, 29, 5, 2, 4]))
  
  // function previousPrime(array) {
  //   if (num <= 2) {
  //     return null
  //   }
  //   for (let i = num - 1; true ; i--){
  //     if(isPrime(i)){
        
  //     }
  //   }
  // }
  // return i
  
  
  // function previousPrimeArray(array) {

// }

// console.log(previousPrimeArray([10, 12, 11, 7, 16]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
