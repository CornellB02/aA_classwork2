/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.
Examples:
hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"bg
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"

seperate the senetence into individual words
create a seperate function that identifies the vowels
remove the last vowel from each word
after seperating join the sentence back without the vowel

***********************************************************************/

function hipsterfyWord(word) {
    let vowels = ["a","e","i","o","u"];
  
    for (let i = word.length - 1; i >= 0; i -= 1) {
      if (vowels.indexOf(word[i]) !== -1) {
        let hipsterWord = word.slice(0, i) + word.slice(i + 1);
        return hipsterWord;
      }
    }
  
    return word;
  }
  
  function hipsterfy(sentence) {
    let hipsterfiedWords = [];
    let words = sentence.split(" ");
  
    for (let i = 0; i < words.length; i += 1) {
      let word = words[i];
      hipsterfiedWords.push(hipsterfyWord(word));
    }
  
    let hipsterfiedSentence = hipsterfiedWords.join(" ");
    return hipsterfiedSentence;
  }

  console.log(hipsterfy("proper")); // => "propr" 
  console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr")
  console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan")
  console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
  console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"
  
  
  /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
  module.exports = hipsterfy;