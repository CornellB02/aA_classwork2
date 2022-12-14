

/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.
Hint: this can be solved using a single loop

Examples:
peakFinder([1, 2, 3, 2, 1]); //=> [2]
peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
***********************************************************************/

function peakFinder(array) {
    arr = []
    for(let i = 0; i < array.length; i++){
        let finder = array[i];
        let prev = array[i - 1]
        let nex = array [i + 1]
        if ((i === 0 && finder > nex)){
            arr.push(i)
        } else if ((finder > prev) && (finder > nex)){
            arr.push(i)
        } else if ((i === array.length - 1) && (finder > prev)){
            arr.push(i)
        }
}
return arr
}

console.log(peakFinder([1, 2, 3, 2, 1])) //=> [2])
console.log(peakFinder([2, 1, 2, 3, 4, 5])); //=> [0, 5])


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = peakFinder;






