/***********************************************************************
Write a function `greatestMap(ary, cb1, cb2)` which takes as an argument
an array of numbers and two callbacks. It creates a new array with each
element from ary "mapped" to a new element using whichever callback
returns a larger mapped value. Both callbacks take as arguments the
element, index, and array.

var ary1 = [1, 5, 10];

function squareRootRounder(num) {
  return Math.round(Math.sqrt(num);
}

function half(num) {
  return num / 2;
}

greatestMap(ary1, squareRootRounder, half);
=> [ 1, 2.5, 5 ]

Hint:

(squareRootRounder(1); //=> 1
(squareRootRounder(5); //=> 2
(squareRootRounder(10); //=> 3
***********************************************************************/


function greatestMap(array, cb1, cb2) {
  let arr = []
  for (let i = 0; i < array.length; i++){
    let ele = array[i]
    if (cb1(ele) > cb2(ele)) {
      arr.push(cb1(ele));
    } else {
      arr.push(cb2(ele));
    }
  }
  return arr
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = greatestMap;
