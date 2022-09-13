// // merge Sort 


// // function mergeSort(arr) {
// //     if (arr.length <= 1) return arr;
// //     let mid = Math.floor(arr.length/2)
// //     let left = mergeSort(arr.slice(0,mid))
// //     let right = mergeSort (arr.slice(mid))
// //     return merge(left,right);
// // }



// // function merge(left,right) {
// //     let merge = [];
// //     while (left.length && right.length){
// //         if (left[0]<right[0]) {
// //             merge.push(left.shift());
// //         } else {
// //             merge.push(right.shift());
// //         }
// //     }
// //     return merge.concat(left,right);
// // }

// // function mergeSort(arr){
// //     if (arr.length <= 1) return arr;
// //     let mid = Math.floor(arr.length/2)
// //     let left = mergeSort(arr.slice(0,mid))
// //     let right = mergeSort(arr.slice(mid))
// // //     return merge(left,right)
// // // }

// // // function merge(left, right) {
// // //     let merge = []
//     while (left.length && right.legth){
// // //         if(right[0] < left[0]) {
// // //             merge.push(right.shift())
// // //         } else {
// // //             merge.push(left.shift())
// // //         }
// // //     }
// // //     return merge.concat(left,right)
// // // }
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2)
//     let front = mergeSort(arr.slice(0,mid))
//     let back = mergeSort(arr.slice(mid))
//         return merge(front,back)
    
// }

// function merge(front, back) {
//     let merged = []
//     while (front.length && back.length){
        
//         if(front[0] < back[0]){
//             merged.push(front.shift())
//         } else {
//             merged.push(back.shift())
//         }
//     }
//     return merged.concat(front,back)
// }

// function bubbleSort(arr) {
//     let sorted = false;
//     while (!sorted){

//         sorted = true 
//         for (let i = 0; i < arr.length; i++){
            
//             if(arr[i] > arr[i + 1]){
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//                 sorted = false 
//             }
//         }
//     }
//     return arr
// }

// // console.log(bubbleSort([3,5,21,67,52,71,8]))

// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2)
//     let right = mergeSort(arr.slice(0,mid))
//     let left = mergeSort(arr.slice(mid))
//         return merge(left,right)
// }

// function merge(left, right) {
//     let merge = []
//     while(left.length && right.length){
//         if (left[0] > right[0]){
//             merge.push(right.shift())
//         }else{
//             merge.push(left.shift())
//         }
//     }
//     return merge.concat(left,right)
// }

// console.log(mergeSort([3,5,21,67,52,71,8]))

// console.log(mergeSort(['winner','fuck','money','pussy','in','life','pow']))

// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(left, right)
// }

// function merge(left, right) {
//     let merge = []
//     while (left.length && right.length){
    
//         if (left[0] < right[0]){
//             merge.push(left.shift())
//         } else {
//             merge.push(right.shift())
//         }
//     }
//     return merge.concat(left,right)
// }


// O(nlog(n))

// lenierithmic 


// function bubbleSort(arr) {
    //     let sorted = false 
    //     while (!sorted){
        
        //         sorted = true 
        //         for (let i = 0; i < arr.length; i++){
            
            //             if (arr[i] > arr[i+1]){
                //                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                //                 sorted = false 
                //             }
                //         }
                //     }
                //     return arr
                // }
                
     
                
                
                
                
                
                // console.log(mergeSort([3,5,21,67,52,71,8]))

                // function quickSort(arr) {
                //     if(arr.length <= 1)return arr;
                //     let pivot = arr.shift()
                //     let left = quickSort(arr.filter(ele => ele <= pivot))
                //     let right = quickSort(arr.filter(ele => ele > pivot))
                //     return left.concat([pivot],right)
                // }

                // console.log(quickSort([3,5,21,67,52,71,8]))


                function mergeSort(arr) {
                    if(arr.length <= 1)return arr;
                    let mid = Math.floor(arr.length/2)
                    let left = mergeSort(arr.slice(0,mid))
                    let right = mergeSort(arr.slice(mid))
                    return merge(left,right)
                }

                function merge(left,right) {
                    let merged = []
                    while(left.length && right.length){

                        if (left[0] > right[0]){
                            merged.push(right.shift())
                        } else {
                            merged.push(left.shift())
                        }
                    }
                    return merged.concat(left,right)
                }


console.log(mergeSort([3,5,21,67,52,71,8]))

console.log(mergeSort(['winner','fuck','money','pussy','in','life','pow']))

// function bubbleSort(arr) {
//     let sorted = false 
//     while(!sorted){

//         sorted = true
//         for (let i = 0; i < arr.length; i++){

//             if(arr[i] > arr[i+1]){
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//                 sorted = false 
//             }
//         }
//     }
//     return arr
// }

// console.log(quickSort([33434,5459,33341,622,5302,2991,0]))


// function quickSort(arr) {
//     if(arr.length <= 1)return arr;
//     let pivot = arr.shift()
//     let left = quickSort(arr.filter(ele => ele <= pivot))
//     let back = quickSort(arr.filter(ele => ele > pivot))
//     return left.concat([pivot],back)
// }

// function findCharacterInString(str, chr) {
//     const characterIndex = str.indexOf(chr);

//     if (characterIndex === -1) {
//         return null;
//     }

//     return characterIndex;
// }

// console.log(findCharacterInString('song', 's'))


console.log(25%7)