/***********************************************************************
Write a function removeNthLetter(word, n) that takes in a string and an
index `n`. The function should return that word with the character at
index `n` removed.

Examples:

removeNthLetter('bootcamp', 0); // => 'ootcamp'
removeNthLetter('bootcamp', 6); // => 'bootcap'
removeNthLetter('bootcamp', 4); // => 'bootamp'
removeNthLetter('computer', 3); // => 'comuter'
***********************************************************************/

function removeNthLetter(word, n) {
    let str = ''
    for (let i = 0; i < word.length; i++){
        let char = word[i]
    if (char === 0)

        str += char
    }
    return str
}

console.log(removeNthLetter('money', 2))

// function indexMove(word) {
//     for 
// }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = removeNthLetter;
