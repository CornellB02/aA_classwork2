/*******************************************************************************
Write a function evenRange(start, end) that returns an array containing all even
numbers between 'start' and 'end' in sequential order.

Examples:

evenRange(4, 11) => [ 4, 6, 8, 10 ]
evenRange(8, 5) => []
*******************************************************************************/

// function evenRange(start, end) {
//   let newArr = []

//   for (let i = start;i <= end;i += 1){
//     if (i % 2 === 0);
//     newArr.push(i);
//   }
//   return newArr
// }

// console.log(evenRange(13, 20)) // [ 14, 16, 18, 20 ]


// Write a function fuzzBizz(max) that returns an array of numbers under
// the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.

// Examples:

// fuzzBizz(17) => [ 2, 4, 6, 7, 8, 10, 12, 16 ]
// fuzzBizz(30) => [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]

function fuzzBizz(max) {
  let arr = []
  for (let i = 0; i <= max; i++){
   if ((i % 2 === 0 || i % 7 === 0) && !(i % 2 === 0 && i % 7 === 0))
   arr.push(i)
  }
return arr
}

console.log(fuzzBizz(37))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = evenRange;
