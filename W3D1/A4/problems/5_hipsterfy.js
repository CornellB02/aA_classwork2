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
function vowelRemove (word) {
  let vowels = ["a", "e", "i", "o", "u"]
  for (let i = word.length - 1; i >= 0; i--) {
    if(vowels.indexOf(word[i]) !== -1){
     noVowel = word.slice(0, i) + word.slice(i + 1)
     return noVowel
    }
}
  return word
}

// console.log(vowelRemove("moenu"))


function hipsterfy(sentence) {
  let newWord = []
  let words = sentence.split(" ")
  // console.log(words)
  for (let i = 0; i < words.length; i++){
    let sen = words[i]
    // console.log(sen)
    newWord.push(vowelRemove(sen))
  }

  return newWord.join(" ")

}


console.log(hipsterfy("proper"))

console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("embrace thy end")); // => "turtl cheeseburgr fris"

// /**************DO NOT MODIFY ANTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
