/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

function greatestCommonFactor(num1, num2) {
  for (var i = num1; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

function mergeSort (arr) {
  if (arr.length <= 1) return arr;
  let mid = mergeSort(arr.length/2)
  let front = mergeSort(arr.slice(0,mid))
  let back = mergeSort(arr.slice(mid))
    return merge(front,back)
}

function merge (front, back){
  merged = []
  while (front.length && back.length){
    
    if (front[0] > back[0]){
      merged.push(back.shift())
    }else {
      merged.push(front.shift())
    }
  }
  return merged 
}

console.log(mergeSort([3,0,2,18,92,7,36,9]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greatestCommonFactor;
