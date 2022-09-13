/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function hipsterfy(sentence) {
  let newStr = ""
  let sen = sentence.split(" ")

  for(let i = 0; i < sen.length; i++ ){
    // console.log(sen) // length = 3
    let word = sen[i] // i = 3
    // console.log(word)
    newStr += vowelRemove(word) + (" ")
  }
  return newStr
}

function vowelRemove(word) {
  let vowels = "aeiou"
  // let newWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i]
    if (vowels.includes(char)){
      // console.log(char)
      return word.slice(0, i) + word.slice(i + 1) 
    }
  }
  
}

console.log(hipsterfy("proper tonic panther"))
console.log(hipsterfy("proper"))
console.log(hipsterfy("runner anaconda"))
console.log(hipsterfy("turtle cheeseburger fries"))
console.log(hipsterfy("towel flicker banana"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
