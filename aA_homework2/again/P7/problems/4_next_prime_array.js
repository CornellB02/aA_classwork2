/*******************************************************************************
Write a function nextPrimeArray(array) that takes in an array of numbers.
The function should return a new array where each prime number is replaced
with the prime number that come next sequentially. For example the prime number
that comes after 5 is 7.

Examples:

nextPrimeArray([-4, 2, 5, 4, 11]) => [ -4, 3, 7, 4, 13 ]
nextPrimeArray([9, 13, 5, 6]) => [ 9, 17, 7, 6 ]
nextPrimeArray([]) => []
*******************************************************************************/

function nextPrimeArray(array) {
  let arr = []
  for (let i = 0; i < array.length; i++){
    if(isPrime(array[i]) === true){
      arr.push(primeAfter(array[i]))
    } else {
      arr.push(array[i])
    }
  }
  return arr
}

function primeAfter(num){
  for(let i = num+1; i < 100*1000; i++){
    if(isPrime(i)){
      return i
    }
  }
}

// console.log(primeAfter(11))

function isPrime(num){
  if(num < 2){
    return false 
  }
  for (let i = 2; i < num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = nextPrimeArray;
