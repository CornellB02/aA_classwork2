/*******************************************************************************
Write a function primeFactors(n) that takes in a number, `n`. The function should
return an array containing all factors of `n` that are prime. A factor is a number
that divides another.

Examples:

primeFactors(10) => [ 2, 5 ]
primeFactors(24) => [ 2, 3 ]
primeFactors(30) => [ 2, 3, 5 ]
primeFactors(11) => [11]
*******************************************************************************/

function primeFactors(n) {
  let arr = []
  for (let i = 0; i <= n; i++){
    if(n % i === 0){
      arr.push(i)
      primeFactor = []
      for (let j = 0; j < arr.length; j++){
        let nums = arr[j]
        if(isPrime(nums)){
          primeFactor.push(nums)
        }
      }
    }
  }
  return primeFactor
}

function isPrime(num){
  if(num < 2){
    return false 
  }
  for (let i = 2; i < num; i++){
    if (num % i === 0){
      return false 
    }
  }
  return true 
}


console.log(primeFactors(99))
console.log(primeFactors(90))
console.log(primeFactors(11))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = primeFactors;
