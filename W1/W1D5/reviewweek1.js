// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true

// function isInside(array, ele) {
//     return array.indexOf(ele) > -1 
// }
// console.log(isInside(['chase', 'phi', 'eliot'], 'fred')); // => false

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

// function reverseStr(str){
//     string = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//     let strs = str[i]  
//         string += strs
//         }
//         return string
//     }

//     console.log(reverseStr('bootcamp'))

    // Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

// function luckySevens(max) {
//     let arr = []
//     for (i = 0; i <= max; i++) {
//         if (i % 7 === 0) {
//         arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(luckySevens(25))

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]


// function copyMachine(ele, num) {
//     let arr = []
//     for (let i = 0; i < num; i++) {
//         arr.push(ele)
//     }
//     return arr
// }
// //

// console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]


// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

// function everyOtherWord(sentence) {
//     arr = []
//     newSen = sentence.split(' ')
//     for (let i = 0; i <= newSen.length; i += 2) {
//         word = newSen[i]
//         arr.push(word)
//     }
//     return arr
// }

// console.log(everyOtherWord('hello how are you doing on this lovely day?')); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]

// function wordYeller(sentence) {
//     yellerWords = []

//     let spl = sentence.split(" ")
//     let punctuation = ". , ! ? ; :".split(" ")

//     for (let i = 0; i < spl.length; i++); {
//         let word = spl[i];
//         let lastChar = word.slice(-1);

//      if (punctuation.indexOf(lastChar) !== -1) { 
//         yellerWords.push(word);
//       } else {
//          yellerWords.push(word + "!");
//       }
//     }
//     return yellerWords.join(" ")
// }


// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true


// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! 


// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]

// function arraySubstring(word, str) {
//     let arr = [];

//     for (let i = 0; i < word.length; i++) {
//         let num = word[i];

//         if (num.indexOf(str) !== -1) {
//         arr.push(true);
//     } else {
//         arr.push(false);
//     }
// }
//     return arr
// }


// console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"))


// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"

// function evenCaps(sentence) {
//     newSen = " "
//     for (let i = 0; i <= sentence.length -1; i++) {
//         let inSen = sentence[i];
//         let capSen = inSen.toUpperCase();
//         if (i % 2 === 0) { newSen += capSen
//         } else {newSen += inSen}
//     }
//     return newSen
// }

// console.log(evenCaps("Tom got a small piece of pie"))//



// / Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('funplace'); 
// reverseStr('App Academy'); //=> 'ymedacA ppA'

// function reverseStr(str) { 
//     string = ' '
//     for (let i = str.length - 1; i >= 0; i--){

//         str1 = str[i] 
//     string += str1
// }
// return string
// }


// console.log(reverseStr('funplace'))


// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

// function everyOtherWord(sentence) {
//     let arr = []
//     let newSen = sentence.split(' ')

//     for (i = 0; i < newSen.length; i +=2) {
//         senIn = newSen[i]; {
//         arr.push(senIn)
//         }
//     }
//     return arr
// }

// console.log(everyOtherWord('the weather is wonderful'))

// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true


// function isInside(array,ele) {
//    return array.indexOf(ele) > -1 
// }

// console.log(isInside(['chase', 'phi', 'eliot'], 'eliot'))

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//

// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

// function luckySeven(max) {
//     let arr = []
//     for (let i = 0; i <= max; i++) {
//         if (i % 7 === 0)
//         arr.push(i)
//     }
//          return arr
// }
// console.log(luckySeven(42))


// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

// function reverseStr(str) {
//     let string = ' '
//     for (let i = str.length - 1; i >= 0; i--){
//         str1 = str[i]
//         string += str1

//         }
//         return string
//     }

//     console.log(reverseStr('kcidymkcus'))


    // Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]


// function copyMachine(ele, num) {
//    let arr = []
//    for(let i = 0; i < num; i++){
//    arr.push(ele)
//    }
//    return arr
// }

// console.log(copyMachine('stfu', 7))


