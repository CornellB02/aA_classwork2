/***********************************************************************
Write a function `countInnerElement(arr)` that takes in a 2-D array of elements.
Each element of 'arr' is a sub array that contains multiple elements. The number
of elements contained in each sub array are not the same. We can assume each sub
array contains at least one element. We should return an object that counts
how many times each element in each sub array repeats.

// Examples:
// var arr1 = [
//   [1,2,4,5],
//   [2,7,4],
//   [1,4,5,2,7]
// ]

// countInnerElement(arr1) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

// var arr2 = [
//   ['a','b','c','d'],
//   ['a','b'],
//   ['a','c','d','a']
// ]

// countInnerElement(arr2) // => {a: 4, b: 2, c: 2, d: 2}
***********************************************************************/
// inner array are of diff lengths 
//initalize a obj to be returned 
//i know that i need to use the same counting patterns


function countInnerElement(arr) {
  let obj ={}

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    let innerArr = arr[i]
    for (let j = 0; j < innerArr.length; j++){
        console.log(innerArr[j])
        let ele = innerArr[j]
        if (obj[ele] === undefined) {
            obj[ele] = 1
        } else {
            obj[ele] += 1
    }
  }
  }
  return obj 
}


var arr1 = [
  [1,2,4,5],
  [2,7,4],
  [1,4,5,2,7]
]

countInnerElement(arr1) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

var arr2 = [
  ['a','b','c','d'],
  ['a','b'],
  ['a','c','d','a']
]

countInnerElement(arr2) // => {a: 4, b: 2, c: 2, d: 2}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countInnerElement;
