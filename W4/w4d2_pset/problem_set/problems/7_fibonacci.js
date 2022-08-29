/***********************************************************************
Write a function fibonacci(n) that takes in a number that represents the
length of a sequence. The function should should return the first `n`
numbers in the fibonacci sequence.

The first two numbers of the fibonacci sequence are 1 and 1. The next
number in the sequence can be found by adding the last two numbers in
the sequence.

Solve this without recursion.
If you don't know what recursion is, we'll see it tomorrow!

Examples:

fibonacci(0); // => []
fibonacci(1); // => [ 1 ]
fibonacci(2); // => [ 1, 1 ]
fibonacci(3); // => [ 1, 1, 2 ]
fibonacci(5); // => [ 1, 1, 2, 3, 5 ]
fibonacci(10); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
***********************************************************************/


//return a array up to the length of max
function fibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [1]; 
    let array = [1, 1]; 
    while (array.length < n) {
        let prev1 = array[array.length - 1]
        let prev2 = array[array.length - 2]
        let nextfile = prev1 + prev2
        array.push(nextfile)
    }
    return array
}

console.log(fibonacci(78))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = fibonacci;
