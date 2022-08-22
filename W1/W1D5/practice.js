// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false


function isInside(array, ele){
    return array.indexOf(ele)
}

console.log(isInside(['chase', 'phi', 'eliot'], 'eliot'))


// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

function reverseStr(str) {
    let string = ''
    for (let i = str.length - 1; i >= 0; i--){
        let ele = str[i]
        string += ele
    }
    return string
}


console.log(reverseStr('bootcamp'))

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

function luckySevens(max){
    let array = []
    for (let i = 1; i <= max; i++){
        if (i % 7 === 0){
            array.push(i)
        }
    }
    return array
}



console.log(luckySevens(25))
console.log(luckySevens(42))


// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine(11, 6); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

function copyMachine(element, num) {
    let array = []
    for (let i = 0; i < num; i++){
        array.push(element)
    }
    return array
}

console.log(copyMachine(11, 6))
console.log(copyMachine('bread', 4))


// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

function everyOtherWord(sentence){
    let arr = []
    sen = sentence.split(' ')
    for (let i = 0; i <= sen.length; i += 2){
        let word = sen[i]
        arr.push(word)
    }
    return arr
}

console.log(everyOtherWord('hello how are you doing on this lovely day?'))


// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true

// Example 2
var words = "Go to the store and grab the following: milk, bread, run, and cake";
wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true

function wordYeller(sentence) {
    let punc = ". , ! ? ; :".split(" ")
    let arr = []
    let str = sentence.split(" ")
    for(let i = 0; i < str.length; i++){
        str1 = str[i]
        lastChar = str.slice(-1)
        if (punc.indexOf(lastChar) !== -1) {
            arr.push(str1)
        } else{

        arr.push(str1  + "!")
    }
}
    return arr.join(" ")
}

console.log(wordYeller(words))

// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
arraySubstring(["hello", "history", "helix", "hellos"],"hel")
//=> [true, false, true, true]
arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
//=> [true, false, false, true]

function arraySubstring(words, str){
    let array = []
    for (let i = 0; i < words.length; i++){
        word = words[i]

        if (word.indexOf(str) !== -1){
            array.push(true)
        } else {
            array.push(false)
        }
    }
    return array
}


console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"))

console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"))


// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"


function evenCaps(sentence){
    let sen = "";
    for (let i = 0; i < sentence.length; i++){
       let letter = sentence[i]
    
       if (i % 2 === 0) {
        let Upper = letter.toUpperCase();
        sen += Upper;
       } else {
        sen += letter
       }
    }
    return sen
}

console.log(evenCaps("Tom got a small piece of pie"))