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
  let words = sentence.split(" ")
  for (let i = 0; i < words.length; i++){
    let word = words[i]
    let newWord = removeLast(word)
    newStr += newWord + (" ")
    // console.log(newStr)

  }
  return newStr
}

function removeLast(word){
  let vowels = "aeiou"
  // let str = ""
  for (let i = word.length - 1; i >= 0; i--){
    let char = word[i]
    if(vowels.includes(char)){
      return word.slice(0,i) + word.slice(i+1)
    }
  }
}

console.log(hipsterfy("proper"))
console.log(hipsterfy("proper tonic panther"))
console.log(hipsterfy("towel flicker banana"))
console.log(hipsterfy("runner anaconda"))
console.log(hipsterfy("turtle cheeseburger fries"))
console.log(hipsterfy("turtle cheeseburger fries"))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
