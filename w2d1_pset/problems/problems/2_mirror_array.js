/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray(array) {
    let arr = []
    for(let i = 0;i < array.length; i++) {
        arr.push(array[i]);
    }

    for (let i = array.length - 1; i >= 0; i--) {
        arr.push(array[i]);
    }

    return arr
}

console.log(mirrorArray([1,2,3]))

console.log(mirrorArray(['a', 'b', 'c', 'd']))
<<<<<<< HEAD


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = mirrorArray;
=======
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;
>>>>>>> 76280a3c8cc48d6685b61082108e6909c13ee079
