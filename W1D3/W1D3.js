function printTen() {
    for(num = 0; num <= 10; num += 1) {
        console.log(num)
    }
}

printTen();

// const logBetween = (lownum, highnum) => {
//     for (let i = lownum; i <= highnum; i++) {
//         console.log(i)
//     }
// }

// console.log(logBetween(2, 4, 7))

// logBetweenStepper()


// function logBetweenStepper(min, max, step) {
//     let i = min;
//     while (i <= max) {
//       console.log(i);
//       i += step;
//     }
//   }

// function logBetweenStepper(min, max, step) { 
//     for (let i = min; i <= max; i+= step) {
//         console.log(i)
//     }
// }

//   console.log(logBetweenStepper(-10,15,5))


//   Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15

// function printFive(max) {
//     let i = 0;
//     while (i < max) { 
//         console.log(i);
//          i += 5 }

// }
//      for (let i = 0; i < max; i += 5) {
//    {
//         console.log(i);
//     }
// }
// }

// printFive(20)

// let c = "c".toUpperCase()

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91

// const printReverse  = (min, max) => {
//     for (let i = max - 1; i > min; i--) {
//         console.log(i)
//     }
// }

// printReverse (13, 28)


// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365); // => 66795

// function sumNums(num) {
//     let sum = 0
//     for (let i = 1; i <= num; i++){
//         sum += i;
//     }

//     return sum;
// }


// function isFactor (num , factor) {
//     return num % factor === 0
// }

// console.log(isFactorOf(6,2)); // => true
// // isFactorOf(-6, 2); // => true
// // isFactorOf(5,0); // => false
// // isFactorOf(22, 7); // => false


// function fizzBuzz(num) {
//     for(let i = 0; i<= num; i++) {
//         if ((i % 3 === 0 || i % 5 === 0) 
//         && !(i % 3 === 0 && i % 5 === 0)) {
//             console.log(i)
//         }
         
//     }
// }


// fizzBuzz(40)

// 5
// 6
// 9
// 10
// 12
// 18
