/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

function greatestCommonFactor(num1, num2) {
  for (let i = num1; i >= 1; i--){
    if (i % num1 === 0 && i % num2 === 0){
      return i
    }
  }
} 

// function bubbleSort (arr){
//   let sorted = false
//   while (!sorted) {

//     sorted = true 
//     for (let i = 0; i < arr.length; i++){

//       if(arr[i] > arr[i+1]) {
//         [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//         sorted = false
//       }
//     }
//   }
//   return arr
// }


// console.log(bubbleSort([3,0,2,18,92,7,36,9]))

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length/2)
//   let front = mergeSort(arr.slice(0,mid))
//   let back = mergeSort(arr.slice(mid))
//     return merge(front,back)
// }

// function merge (front, back){
//   merged = []
//   while (front.length && back.length){
    
//     if (front[0] > back[0]){
//       merged.push(back.shift())
//     }else {
//       merged.push(front.shift())
//     }
//   }
//   return merged.concat(front,back)
// }

// console.log(mergeSort([3,0,2,18,92,7,36,9]))

// function bubbleSort(arr) {
//   let sorted = false;
//   while(!sorted){

//     sorted = true 
//     for (let i = 0; i < arr.length; i++){
//       if (arr[i] > arr[i+1]){
//         [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//         sorted = false 
//       }
//     }
//   }
//   return arr
// }


// console.log(bubbleSort([3,0,2,18,92,7,36,9]))

// function mergeSort (arr){
//   if(arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length/2)
//   let left = mergeSort(arr.slice(0,mid))
//   let right = mergeSort(arr.slice(mid))
//     return merge(left,right)
// }

// function merge(left,right) {
//   merged = []
//   while (left.length && right.length){
//     if (left[0]<right[0]){
//       merged.push(left.shift())
//     }else {
//       merged.push(right.shift())
//     }
//   }
//   return merged.concat(left,right)
// }



// function bubbleSort(arr) {
//   let sorted = false 
//   while(!sorted){
    
//     sorted = true;
//     for(let i = 0; i < arr.length; i++){
      
//       if (arr[i] > arr[i+1]){
//         [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//         sorted = false
//       }
//     }
//   }
//   return arr
// }

// function mergeSort(arr){
//   if(arr.length <= 1) return arr
//   let mid = Math.floor(arr.length/2)
//   let left = mergeSort(arr.slice(0,mid))
//   let right = mergeSort(arr.slice(mid))
//   return merge(left,right)
// }

// function merge(left, right) {
//   let merged = []
//   while(left.length && right.length){

//     if(left[0] > right[0]){
//       merged.push(right.shift())
//     } else {
//       merged.push(left.shift())
//     }
    
//   }
//   return merged.concat(left,right)
// }

// console.log(mergeSort([3,0,2,18,92,7,36,9]))
// *******************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = greatestCommonFactor;
