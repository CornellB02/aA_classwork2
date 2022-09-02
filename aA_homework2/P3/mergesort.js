// merge Sort 


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort (arr.slice(mid))
    return merge(left,right);
}



function merge(left,right) {
    let merge = [];
    while (left.length && right.length){
        if (left[0]<right[0]) {
            merge.push(left.shift());
        } else {
            merge.push(right.shift());
        }
    }
    return merge.concat(left,right);
}


// console.log(mergeSort([3,5,21,67,52,71,8]))


// O(nlog(n))

// lenierithmic 





