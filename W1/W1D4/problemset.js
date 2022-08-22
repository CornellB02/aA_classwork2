// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']

function capWords(words) {
    let temp = [];
    let word = words['i'];
    let upperWord = words.upperCase();
//     let lowerWord = string.lowerCase();
    for (i = 0; i < word.length; i++) {
       temp.push(words[i].toUpperCase());
    } 
//     let answer = words.forEach(word => {
//     word.toUpperCase();    
//     }); 
//     return temp
    return upperWord+','+upperWord+','+words
}

// function capWords(words) { /// 
//   let newWords = [];/// declare  newWords its own empthy array 

//   for (var i = 0; i < words.length; i++) { // for loop is doing its own thing 
//     let word = words[i]; /// word is now the index od words
//     let cappedWord = word.toUpperCase(); /// cappedWord is now the uppercased 
//     newWords.push(cappedWord);
//   }
//   return newWords;
// }

// console.log(capWords(['hello', 'boOtCaMp', 'PREP!']))



// function logEach(array) {
//     let newArr = [] 
//     for (let i = 0; i <= array; i += 1)
//     console.log(array)
//      {

//     }
//     return array 
// }

// function logEach(array) {
//     for (let i = 0; i < array.length; i += 1) {
//       console.log(i + ": " + array[i]);
//     }
//   }

// // Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson


// console.log(logEach(["Anthony", "John", "Carson"]))

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// console.log(sumArray([5, 6, 4])); // => 15
// sumArray([7, 3, 9, 11]); // => 30

// let something = [5, 6, 8]

// function sumArray(arr) {
//     let sum = 0
//     // let newArray = []
//     for (let i = 0; i < arr.length; i += 1) {
//         let num = arr[i]
//         sum += num // 6
//     }
    
//     return (sum);
// }       




// console.log(sumArray(something));


// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'


// function wordPeriods(sentence) {
//     let words = sentence.split(' ')
//     let newWords = []
    
//     // let Sen = sentence()
//     for (let i = 0; i < words.length; i++) {
//         word = words[i]
        
//         ele = word + '.'
//         newWords.push(ele)

//     }
//     let newSen = newWords.join(' ');
//     return newWords 
// }

// console.log(wordPeriods('hello world')); // => 'hello. world.'



// function printForwards(arr) {
//     for (var i = 0; i < arr.length; i++) {
//       var ele = arr[i];
//       console.log(ele);
//     }
//   }
  
//   var alphabet = ['a'+"."+'b', 'c', 'd', 'e'];
//   printForwards(alphabet);


// function printBackwards(array) {
//   for (var i = array.length - 1; i >= 0; i--) {
//     var ele = array[i];
//     console.log(ele);   
//   }
// }

// var names = ['kurstie', 'mike', 'alex', 'meagan'];
// printBackwards(names);


// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null


// function maxValue(array) {
//     let max = 0
//     for (let i = 0; i < array.length; i++){
//         let num = array[i]
//         if (num > max) {
//             max = num;
//         }
//     }
//     return max
    
// }

// console.log(maxValue([-4, 10, 0.43])); // => 0.43


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

// function maxValue(array) {
//     max = 0
//     for (let i = 0; i < array.length; i ++){
//      let num = array[i] 
//      if (num > max) {
//          max = num
//          }
//      }
//  return max
// }

// console.log(maxValue([-4, 10, 0.43])); // => 0.43

