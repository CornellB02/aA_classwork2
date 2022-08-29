/*******************************************************************************
Write a function longestBigram(sentence) that takes in a sentence string and returns
the longest bigram in the sentence. A bigram is a pair of consecutive words.
When returning the bigram, include the space between the words.
Assume there will be no punctuation. In the case of a tie, return the earlier bigram.

Examples:

longestBigram('measure twice cut once'); // => 'measure twice'
longestBigram("One must have a mind of winter"); // => 'must have'
longestBigram("go home to eat"); // => 'go home'
longestBigram("his last assessment is fun"); // => 'last assessment'
*******************************************************************************/

function longestBigram(sentence) {
  let currentLongest = ''
  let sen = sentence.split(' ')
  for (let i = 0; i < sen.length - 1; i++){
    // 0
    word = sen[i] // of
    // let nums = word.length
    let next = sen[i + 1] //winter
    let current = word + ' ' + next
    if (current.length > currentLongest.length){
      currentLongest = current; // must have
    }
    }

    return currentLongest
    }
  



// function charCount(word) {
//   return word.length
// }



console.log(longestBigram('measure twice cut once')); // => 'measure twice'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestBigram;
