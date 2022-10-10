/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
*******************************************************************************/

function leastCommonMultiple(num1, num2) {
    let i = num1 

    while (true){
        if (i % num2 === 0){
            return i
        }
        i += num1
    }
}

function leastCommonMultiple(num1, num2) {
    let i = num

    while(true){
        if(i % num2 === 0){
            return i
        }
        i += num1
    }
}

console.log(leastCommonMultiple(2, 3))

// Write a function `threeIncreasing(arr)` that takes in an array of
// numbers and returns true if the array contains 3 consecutive numbers in
// increasing order. The function should return false otherwise.

// Note that the 3 consecutive numbers should be increasing by 1, so the
// the second  number is 1 greater than the first, and the third number is
// 1 greater  than the second.

// Examples:

// function threeIncreasing(arr) {
//   for (let i = 0; i < arr.length; i++){
//     let num = arr[i]
//     // console.log(num)
//     if ((num + 1) === (arr[i+1]) && ((arr[i+1]+1) === (arr[i+2]))){
//       return true 
//     }
//   }
//   return false
// }

// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // => true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // => false
// console.log(threeIncreasing([1,2,3,9,2,3,6,3,2]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
