/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
    let sen = sentence.split(' ');
    let arr = []

    for(let i = 0; i < sen.length; i++) {
        let word = sen[i]
        let newWord = word.toLowerCase();
        let firstChar = newWord[0].toUpperCase();
        let lastChar = newWord[newWord.length - 1].toUpperCase();
        newWord1 = firstChar + newWord.slice(1,-1)+ lastChar;
        arr.push(newWord1)
    }
    let newSen = arr.join(' ')
    return newSen

} 

console.log(firstLastCap('hello BOOTCAMP PrEp'))
<<<<<<< HEAD
console.log(firstLastCap('what is on the radio'))
=======
console.log()
>>>>>>> 76280a3c8cc48d6685b61082108e6909c13ee079

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
