/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each idk. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

// const arrayBuilder = require("./1_array_builder")

function hipsterfy(sentence) {
  let words = sentence.split(' ')
  let arr = []
  for (let i = 0; i < words.length; i++){
    let word = words[i]
    arr.push(vowelRemove(word))
  }
  return arr.join(' ')
}

function vowelRemove(word){
  vowels = 'aeiou'
  for(let i = word.length - 1; i >= 0; i--){
    let char = word[i]
    if(vowels.includes(char)){

      return word.slice(0,i) + word.slice(i+1)
      }
    }
  }


// function vowelRemove (word) {
//   let vowels = ["a", "e", "i", "o", "u"]
//   for (let i = word.length - 1; i >= 0; i--) {
//     if(vowels.indexOf(word[i]) !== -1){
//      noVowel = word.slice(0, i) + word.slice(i + 1)
//      return noVowel
//     }
// }
//   return word
// }

// console.log(vowelRemove("moenu"))


// function hipsterfy(sentence) {
//   let vowels = ["a", "e", "i", "o", "u"]
//   let newWord = []
//   let words = sentence.split(" ") 
//   // console.log(words)
//   for (let i = 0; i < words.length; i++){
//     let sen = words[i]
//     let reverseW = sen.split('').reverse().join('')
//     // console.log(words)
//     for (let j = 0; j < reverseW.length; j++){
//       let fronTword = ""
//       let char = reverseW[j]
//       console.log(char)
//       if(vowels.indexOf(char) !== -1){
//         // newWord.push(char)
//         fronTword += sen.slice(0,i) + sen.slice(i+1)
//         // console.log(idk)
//       }

//     }
    
//   }

  // return newWord.join(" ")

// }


// function hipsterfy(sentence){
//   let sen = sentence.split(' ')
//   let newSen = []
//   for (let i = 0; i < sen.length; i++){
//     let word = sen[i]
//     newSen.push(removeVowel(word))
//   }
//   return newSen.join(' ')
// }

// function removeVowel(word){
//   let vowels = 'aeiou'
  
//   for (let i = word.length - 1; i >= 0; i--){
//     let char = word[i]
//     if(vowels.includes(char)){
//     return word.slice(0,i) + word.slice(i+1)

//     }
//   }
// }


console.log(hipsterfy("proper tonic panther"))
console.log(hipsterfy("proper"))
console.log(hipsterfy("runner anaconda"))
console.log(hipsterfy("turtle cheeseburger fries"))
console.log(hipsterfy("towel flicker banana"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
