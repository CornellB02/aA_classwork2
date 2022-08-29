


// // function inception() {
// //     console.log('hi')
// //     inception();
// // }

// function factorial(n) {
//     if (n === 0) return 1;
//     return n * [factorial(n - 1)]
// }
// // return num2 + multiply(num1 -1,num2)

// // console.log(multiply(9203, 9280))


// // function fcatorial(n){
// //     if (n === 1) 
// // }'


// // console.log(factorial(0))


// function fibonacci(n) {
//     if (n === 1 || n === 2) {
//      return 1

//     }

//     let prev = fibonacci(n - 1);
//     let secPrev = fibonacci(n - 2);

//     return prev + secPrev;
//     }


//     console.log(fibonacci(11))


    function greatestFactor(num) {
        for (let i = num - 1; i >= 0; i--){
        if (num % i === 0){
        return i
        }
        }
    }
  
    console.log(greatestFactor(16))

    function summationSequence(start, length) {
        let arr = [start]
          for (let i = arr.length; i < length; i++){
          
          arr.push(sumFun(arr[arr.length - 1]))
          
            }
      return arr
    }
    
    function sumFun(num){
        let sum = 0;
          for (let i = 1; i <= num; i++){
            sum += i
        }
      return sum
      
    }
    
    console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
    console.log(summationSequence(5, 3)); // [5, 15, 120]