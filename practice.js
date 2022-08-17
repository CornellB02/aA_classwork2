// Write a function `mirrorArray(array)` that takes in an array as an
// argument and returns a new array "mirrored" as shown in the examples:

// Examples:

// mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
// mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

// function mirrorArray(array){
//     let newArr = []
//     for (let i = 0; i < array.length; i++){
//         newArr.push(array[i])
//     }

//             for (let i = array.length - 1; i >= 0; i--){
//                 newArr.push(array[i])
                    
//             }
//             return newArr
//     }


// console.log(mirrorArray(['a', 'b', 'c', 'd']))


// Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
// function should return true if the arrays have different lengths. The
// function should return false otherwise.

Examples:

var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

diffArrayLen(a1, a2); // => false
diffArrayLen(a1, a3); // => true

function diffArrayLen (arr1, arr2){
        return (arr1.length !== arr2.length);
}


console.log(diffArrayLen(a1, a3))