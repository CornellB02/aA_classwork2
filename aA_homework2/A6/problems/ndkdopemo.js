function laligatArray(array) {
    let arr = []
    for (let i = 0; i < array.length; i++){
      let num = array[i]
      arr.push(sumPrime(num))
    }
    return arr
  }

  
  function sumPrime(num){
    let sum = 0
    for (let i = 0; i <= num; i++){
      if(isPrime(i)){
        sum += i
      }
    }
    return sum
  }
  
  function isPrime(number) {
    if( number < 2){
      return false 
    }
    for (let i = 2; i < number; i++){
      if(i % number === 0){
        return false 
      }
    }
    return true 
  }


  console.log(laligatArray([10, 11, 20, 15]))