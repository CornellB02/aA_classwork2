// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

// function sumArray(array) {
//     sum = 0
//     // arr = []
//     for(let i = 0; i < array.length; i ++) {
//         arrayNum = array[i]
//         sum += arrayNum
//     }
//     return sum
// }

// console.log(sumArray([5, 8, 4])); // => 15


// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []


// function range(start, end) {
//     let newArray = []
//     for(let i = start;i <= end; i++) {
//         newArray.push(i)
//     }
//     return newArray
// }

// console.log(range(1,92))


// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

// function wordPeriods(sentence) {
//     let newSen = [];
//     senArray = sentence.split(' ');
//     for(let i = 0; i < senArray.length; i++) {
//     word = senArray[i]
//     words = word + '.'
//     newSen.push(words)
//     }
//     return newSen
// }


// console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'


// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//

// function capWords(words) { 
//     let arr = []
//     let word = words['i']
//     for(let i = 0; i <= word.length; i++) {
//         let uppWord = word.toUpperCase();
//         arr.push(word(uppWord))
//     }
//     return arr
// }
// console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']



// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//
// Examples:
//
// myIndexOf([1,2,3,4],4) => 3
// myIndexOf([5,6,7,8],2) => -1

// function myIndexOf(array, target) {
   
//     // arr = []
//     for (i = 0; i <= array.length; i++){
       
//     let num = array[i]
//     // let num2 = taget[i]

//     // num.myIndexOf(num2)
//     // arr.push(num2)
//     }
//     return arr
// }



function myIndexOf(array, target) {
    
    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        
        if (num === target) {
            return i;
        }
    }
    
      return -1;
    }
    
    
    console.log(myIndexOf([5,6,7,8],2))