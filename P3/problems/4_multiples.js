/*******************************************************************************
Write a function that multiples(max, num) that takes in two numbers. The function
should return an array of positive numbers less than `max` that are multiples of `num`.

Examples:

multiples(10, 2) => [ 2, 4, 6, 8 ]
multiples(15, 3) => [ 3, 6, 9, 12 ]
*******************************************************************************/

function multiples(max, num){
  newArr = []

  for (let i = 0; i < max; i++){
    if (i % num === 0){
      newArr.push(i)
    }
  }
  return newArr
}

console.log(multiples(10, 2)) //=> [ 2, 4, 6, 8 ]
console.log(multiples(15, 3)) //=> [ 3, 6, 9, 12 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = multiples;
