/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
*******************************************************************************/

// function reverseString(string) {
//   let str = string.split('-')
//   let arr = []

//   for(let i = str.length - 1; i >= 0; i--) {
//     word = str[i]
//     arr.push(word);
//   }
//   let reversed = arr.join('-')
//   return reversed
// }


// Write a function evenRange(start, end) that returns an array containing all even
// numbers between 'start' and 'end' in sequential order.

// Examples:

// evenRange(4, 11) => [ 4, 6, 8, 10 ]
// evenRange(8, 5) => []

function evenRange(start,end) {
  let arr = []
  for (let i = 0;i <= end; i += 1) {
    if (i % 2 === 0) 
    arr.push(i)
  }
  return arr
}

console.log(evenRange(5, 39))


// console.log(reverseString("Jump,-jump-for-joy")) //=> "joy-for-jump-Jump,"
// /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = reverseString;
