/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/
function removeVowels(word){
    let vowel = ['a', 'e', 'i', 'o', 'u']
   let str = '';

    for (let i = 0; i < word.length; i++){
        let char = word[i]

        if (vowel.indexOf(char) === -1) {
            str += char
        }
    }
        return str
    }


function abbreviate(sentence) {
    let splt = sentence.split(' ')
    let words = []

    for (let i = 0; i < splt.length; i++){
        word = splt[i]
        
        if (word.length > 4) {
            let noVowel = removeVowels(word)
            words.push(noVowel)
             } else {
         words.push(word)
         }
     }
    return words.join(' ')
}


console.log(abbreviate('hello world'))
<<<<<<< HEAD
console.log(abbreviate('bootcamp prep is fun'))
console.log(abbreviate('programming is fantastic'))
console.log(abbreviate('how are you'))
=======
>>>>>>> 76280a3c8cc48d6685b61082108e6909c13ee079


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
