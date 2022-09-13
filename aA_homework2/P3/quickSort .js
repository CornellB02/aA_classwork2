// time complexity O(nlog(n))

// quickSort

function quickSort(arr){
    if (arr.length <= 1) return arr;
    let pivot = arr.shift();
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot],right)
}

console.log(quickSort([3,5,21,67,52,71,8]))


function quickSort(arr){
    if(arr.length <= 1)return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot],right)
}

function quickSort(arr){
    if(arr.length <= 1)return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot],right)
}

function quickSort(arr){
    if(arr.length <= 1)return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot],right)
}

