/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/

// function hipsterfyWord(word) {
//   let str = ''
//   for (let i = 0; i <= word.length; i++){
//     str += removeVowel(word[i])
//   }
//   return str
// }

// function removeVowel(word){
//   let vowels = ["a","e","i","o","u"]
//   for (let i = word.length - 1; i >= 1; i++){
//     let letter = word[i]
//     if(vowels.indexOf(letter.toLowerCase()) !== -1){
//       let hipWord = word.slice(0, i) + word.slice(i + 1)
//       // conosle.log(hipWord)
//       return hipWord
//     }
//   }
//   return word
// }

// console.log(hipsterfyWord('BACKWARDS'))

function quickSort(arr){
  if(arr.length <= 1)return arr
  let pivot = arr.shift()
  let left = quickSort(arr.filter(ele => ele <= pivot))
  let right = quickSort(arr.filter(ele => ele > pivot))
  return left.concat([pivot],right)
}


console.log(bubbleSort([3,5,21,67,52,71,8]))


function mergeSort(arr){
  if (arr.length <= 1)return arr;
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return merge (left,right)

}

function merge(left, right){
  let merged = []
  while(left.length && right.length){
    if (left[0] > right[0]){
      merged.push(right.shift())
    }else{
      merged.push(left.shift())
    }
  }
  return merged.concat(left,right)
}

function bubbleSort(arr) {
  let sorted = false 
  while (!sorted){

    sorted = true 
    for(let i = 0; i < arr.length; i++){

      if(arr[i] > arr[i+1]){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        sorted = false
      }
    }
  }
  return arr
}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = hipsterfyWord;
