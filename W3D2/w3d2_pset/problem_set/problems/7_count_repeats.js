/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

function countRepeats(string) {
    let letters = {}
    let count = 0
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        
        if (letters[char] === undefined) {
            letters[char] = 1; 
        } else {
            letters[char] += 1
        }
    }
    for (let key in letters){
        if(letters[key] > 1){
            count++
        }
    }
    return count
}

console.log(countRepeats('aaaalvin'))
console.log(countRepeats('alvin'))
console.log(countRepeats('pops'))
console.log(countRepeats('mississippi'))
console.log(countRepeats('hellobootcampprep'))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;



