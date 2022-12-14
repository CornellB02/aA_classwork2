/**************************************************************************************
Write a function `reverseString(str)` that takes in a string and returns the given string
with its characters in reverse order.

Examples:

reverseString('taco');        // => 'ocat'
reverseString('hello world'); // => 'dlrow olleh'

Difficulty: Easy
*************************************************************************************/

function reverseString(str) {
    back = ''
    for (let i = str.length - 1; i >= 0; i--){
        char = str[i]
        back += char
    }
    return back
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = reverseString;
