/***********************************************************************
Write a function `longWordCount(string)` that takes in a string and
returns the number of words longer than 7 characters.
Examples:
longWordCount(""); // => 0
longWordCount("short words only"); // => 0
longWordCount("one reallylong word"); // => 1
longWordCount("two reallylong words inthisstring"); // => 2
longWordCount("allwordword longwordword wordswordword"); // => 3
longWordCount("seventy schfifty five"); // => 1'

// init a split in the sentence in order to get each individual word 
// set a variable to the total number 
// count how many charaters are in each word 
// if the word is longer them 7 chars add it to the total
***********************************************************************/

function longWordCount(sentence) {
    newSen = sentence.split(' ')
    sevenChars = 0
    for (let i = 0; i < newSen.length; i++){
        words = newSen[i]
        if (words.length > 7)[
            sevenChars += 1
        ]
    }
    return sevenChars
}

console.log(longWordCount("two reallylong words inthisstring"))
console.log(longWordCount(""))
console.log(longWordCount("seventy schfifty five"))
console.log(longWordCount("allwordword longwordword wordswordword"))
console.log(longWordCount("one reallylong word"))
console.log(longWordCount("short words only"))
console.log(longWordCount("sunday moring sundaymorning"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = longWordCount

