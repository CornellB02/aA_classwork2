

    // Return an array containing all the odd indices in the array
    // Your code here
    console.log(oddIndices([2,3,25,2,4,2,7]))
    
function oddIndices(arr) {
    let arr0 = []
    if(!arr.length){
        return arr0 
    }
    let arr1 = []
    for (let i = 0; i < arr.length; i++){
        let ind = arr[i]
        // console.log(ind)
        if(isOdd([i])){
            arr1.push(ind)
        }
    }
    return arr1
}


// function isOdd(num){
//     if (num === 0){
//         return false 
//     }
//     if(num % 2 === 0){
//         return false 
//     }
//     return true 
// }

console.log(isOdd(33))

// Return an array containing all the odd indices starting from the end
// Your code here
function oddReverse(arr) {
    let arr0 = []
    if(!arr.length){
        return arr0 
    }
    let arr1 = []
    for (let i = arr.length - 1; i >= 0; i--){
        let ind = arr[i]
        // console.log(ind)
        if(isOdd([i])){
            arr1.push(ind)
        }
    }
    return arr1  
}

function isOdd(num){

    if (num === 0){
        return false 
    }
    if(num % 2 === 0){
        return false 
    }
    return true 

}  

console.log(oddReverse([9,72,3,2,8,39,7]))



function secondPower(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++){
        let num = arr[i]
        if(powerTwo(i))
        array.push(num)
    }
    return array
}

function powerOfTwo{
    while(num >= 1){
        if(num === 1) {
            return true 
        } 
        num /2
    }
    return false 
}
// Return an array containing all indices that are powers of 2
// Your code here

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}