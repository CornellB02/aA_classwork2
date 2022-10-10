/*******************************************************************************
Write a function sum2Darray(array) that takes in a 2-Dimensional array of numbers.
The function should return the total sum of all numbers in the 2D array.

Examples:

var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
sum2DArray(arr1); // => 21

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
sum2DArray(arr2); // => 3
*******************************************************************************/
// console.log(sum2DArray(arr1))
// console.log(sum2DArray(arr2))

function sum2DArray(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++){
    let inArr = array[i]
    for (let j = 0; j < inArr.length; j++){
      let num = inArr[j]
      sum += inArr[j]
    }
  }
  return sum
}






// var arr1 = [
//   [1,2,3],
//   [4,5],
//   [6],
// ];
// sum2DArray(arr1); // => 21

// var arr2 = [
//   [-10, 2, 3],
//   [1],
//   [10, -5],
//   [2]
// ];
// sum2DArray(arr2); // => 3

// function sum2DArray (array) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     let arr1 = array[i]
//     console.log(arr1)
//     for (let k = arr1.length -1; k >= 0; k--){
//       let num = arr1[k]
//       sum += num
//     }
//   }
//   return sum
// }



var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
console.log(sum2DArray(arr1)); 

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
console.log(sum2DArray(arr2)); 

// function sum2DArray(arr) {
//   let sum = 0

//   for (let i = 0; i < arr.length; i++){
//     let inArr = arr[i]

//     for (let j = 0; j < inArr.length; j++){
//       let num = inArr[j]

//       sum += num
//     }
//   }
//   return sum
// }


// function sum2DArray(array){
//   let sum = 0
//   for (let i = 0; i < array.length; i++){

//     let arr = array[i]
//     for (let j = arr.length -1; j >= 0; j--){
      
//       let num = arr[j]
//       sum += num
//     }
//   }
//   return sum
// }

// console.log(sum2DArray(arr1))
// console.log(sum2DArray(arr2))


// var arr1 = [
//   [1,2,3],
//   [4,5],
//   [6],
// ];
// sum2DArray(arr1); // => 21

// var arr2 = [
//   [-10, 2, 3],
//   [1],
//   [10, -5],
//   [2]
// ];
// sum2DArray(arr2); // => 3

// function sum2DArray(array){
//   let sum = 0
//   for (let i = 0; i < array.length; i++){
//     let arr = array[i]
//     for (let j = 0; j < arr.length; j++){
//       let num = arr[j]
//       sum += num
//     }
//   }
//   return sum
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sum2DArray;
