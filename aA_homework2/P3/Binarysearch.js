

// binarySearch 

function binarySearch(arr, target){
    if (arr.length === 0) return -1 
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid+1);
    if (arr[mid] === target){
        return mid
    } else if (target < arr[mid]){
        return binarySearch(left,target)
    } else {
        let res = binarySearch(right,target)
        return res === -1 ? -1 : res + mid + 1;
    }
}



// const binarySearch = (arr,target) => {
//     if (arr.length === 0) return -1 
//     let mid = Math.floor(arr.length/2);
//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid+1);
//     if (arr[mid] === target){
//         return mid
//     } else if (target < arr[mid]){
//         return binarySearch(left,target)
//     } else {
//         let res = binarySearch(right,target)
//         return res === -1 ? -1 : res + mid + 1;
//     }
// }

// console.log(binarySearch([3, 5, 8, 21, 52, 67, 71], 52))

// function binarySearch(arr,target) {
//     if (arr.length === 0) return -1
//     let mid = math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     if(arr[mid] === target){
//         return mid
//     } else if (target < arr[mid]){
//         return binarySearch(left,right)
//     } else {
//         let res = binarySearch(left,right)
//         return res === -1 ? -1 : res + mid + 1;
//     }
// }

// function binarySearch(arr,target) {
//     if(arr.length === 0) return -1
//     let mid = math.floor(arr.length/2)
//     let front = binarySearch(arr.slice(0,mid))
//     let back = binarySearch(arr.slice(mid))
//     if(arr[mid] === target){
//         return mid 
//     } else if (target < arr[mid]){
//         return binarySearch(left,right)
//     } else {
//         let res = binarySearch(left, right)
//         return res === -1 ? -1 : res + mid + 1;
//     }
// }


// function binarySearch (arr, target){
//     if(arr.length === 0) return -1
//     let mid = math.floor(arr.length/2)
//     let left = binarySearch(arr.slice(0,mid))
//     let right = binarySearch(srr.slice(mid))
//     if(arr[mid] === target){
//         return mid
//     } else if (target < arr[mid]){
//         return binarySearch(left,right)
//     } else {
//         let res = binarySearch(left, right)
//         return res = -1 ? -1 : res + mid + 1;
//     }
// }

// function binarySearch(arr,target){
//     if(arr.length === 0) return -1;
//     let mid = math.floor(arr.length/2)
//     let left = binarySearch(arr.slice(0,mid))
//     let right = binarySearch(arr.slice(mid))
//     if(arr[mid] === target){
//         return mid
//     } else if (target < arr[mid]){
//         return binarySearch(left,right)
//     } else {
//         let res = binarySearch(left,right)
//         return res = -1 ? -1 : res + mid + 1;
//     }
// }



// function binarySearch(arr,target) {
//     if(arr.length === 0) return -1;
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     if(arr[mid] === target){
//         return mid
//     } else if (arr[mid] > target){
//         return binarySearch(left,target)
//     } else {
//         let res = binarySearch(right,target)
//         return res === -1 ? -1 : res + mid + 1
//     }
// }


// function bubbleSort(arr)
// logerimic 
// O(log(n))


function binarySearch(arr, target) {
    if(arr.length === 0) return -1;
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid+1)
    if(arr[mid] === target){
        return mid
    } else if (target < arr[mid]){
        return binarySearch(left,target)
    } else {
        let res = binarySearch(right,target)
        return res === -1 ? -1 : res + mid + 1
    }
}
console.log(binarySearch([1,2,3,4,5,6],3))

// function binarySearch(arr, target) {
//     if( arr.length === 0) return -1;
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid+1)
//     if (arr[mid] === target){
//         return mid
//     } else if (target < arr[mid]){
//         return binarySearch(left,target)
//     }else {
//         let res = binarySearch(right,target)
//         return res === -1 ? -1 : res + mid + 1
//     }
// }

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge (left, right)
}

function merge (left, right) {
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


console.log(mergeSort([8,4893,8775894,74894,83,9399,7322]))

function quickSort(arr){
    if(arr.length <= 1) return arr
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat(pivot,right)
}

console.log(quickSort([8,4893,8775894,74894,83,9399,7322]))