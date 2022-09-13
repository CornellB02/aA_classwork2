

// bubble sort - very inefficient 
//wont neccessarily use


console.log(bubbleSort([3,5,21,67,52,71,8]))

// function bubbleSort(array){

//     let sorted = false 
//     while (!sorted){

//         sorted = true;
//         for (let i = 0; i < array.length; i++){

//             if (array[i] > array[i+1]){
//                 [array[i],array[i+1]] = [array[i+1],array[i]];
//                 sorted = false 
//             }
//         }
//     }
//     return array
// }


// function bubbleSort(array) {
//     let sorted = false
//     while (!sorted){

//         sorted = true;
//         for (let i = 0; i < array.length; i++){
            

//             if(array[i] > array[i+1]){
//                 [array[i],array[i+1]] = [array[i+1],array[i]];
//                 sorted = false 
//             }
//         }
//     }
//     return array
// }

// function bubbleSort(array) {

//     let sorted = false;
//     while (!sorted){

//         sorted = true
//         for (let i = 0; i < array.length; i++){

//             if (array[i] > array[i + 1]){
//                 [array[i],array[i+1]] = [array[i+1],array[i]]
//             }
//         }
//     }
//     return array
// }

function bubbleSort(array) {

    let sorted = false;
    while (!sorted){

        sorted = true 
        for (let i = 0; i < array.length; i++){

            if (array[i] > array[i + 1]){
                [array[i],array[i+1]] = [array[i+1],array[i]]
            }
        }
    }
    return array
}

// function bubbleSort(array) {

//     let sorted = false;
//     while (!sorted){

//         sorted = true 
//         for (let i = 0; i < array.length; i++){

//             if (array[i] > array[i +1]){
//                 [array[i],array[i+1]] = [array[i+1],array[i]]
//             }
//         }
//     }
//     return array
// }

// function bubbleSort(array) {
//     let sorted = false;
//     while(!sorted){

//         sorted = true 
//         for(let i = 0; i < array.length; i++){

//             if (array[i] > array[i + 1]){
//                 [array[i],array[i + 1]] = [array[i + 1],array[i]]
//                 sorted = false 
//             }
//         }
//     }
//     return array
// }



// [7,3,5,2,1,6,0,4]


// O(n2) O = worstcase senario 
// quadratic


