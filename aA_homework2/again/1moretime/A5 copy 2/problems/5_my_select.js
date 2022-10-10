/*******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of `arr` for which the given callback
returns a truthy value.

Examples:

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
result1; // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
result2; // => [ 2, 4, 8 ]

make a new array 
pass each element, index, and array thru the call back 
if the element meets the condition of the callback
push that element into the array 
return the array
*******************************************************************************/

function mySelect(array, cb) {
  let arr = []
  for(let i = 0; i < array.length; i++){
    let ele = array[i]
    if(cb(ele,i,array) === true){
      arr.push(ele)
    }
  }
  return arr
}



// function mySelect(array, cb) {
//   let arr = []
//   for (let i = 0; i < array.length; i++){
//     // let ele = array[i]
//     if(cb(array[i],i,array) === true){
//       arr.push(array[i])
//     }
//   }
//   return arr
// }

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
console.log(result1); // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
console.log(result2); // => [ 2, 4, 8 ]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = mySelect;
