/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

// function intersect(arr1, arr2) {
//   let newArray = [];
//   // newArr2 = arr2[i];
  
//   for (let i = 0; i < arr1.length; i++) {
//     let newArr = arr1[i];
//     if (arr2.indexOf(newArr) > -1) {
//       newArray.push(newArr)
//     }
//   }
//   return newArray
// }


// console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']))// => [ 'b', 'd' ]

// Write a function arrayRange(min, max, step) that takes in 3 numbers as parameters
// The function should return an array containing all numbers between `min` and `max`
// at `step` intervals.

// Examples:arrayRange(2, 5, 1)

function arrayRange(min, max, step) {
  let arr = []
    for (let i = min; i <= max; i += step){
  arr.push(i)
    }
    return arr
  }

  console.log(arrayRange(2, 5, 1))




/*****************************************************************************




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = intersect;
