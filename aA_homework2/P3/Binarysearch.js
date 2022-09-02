

binarySearch 

// function binarySearch(arr, target){
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

console.log(binarySearch([3, 5, 8, 21, 52, 67, 71], 52))


const binarySearch = (arr,target) => {
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