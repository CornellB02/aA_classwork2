/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  let words = sentence.split(' ')
  let short = null

  for (let i = 0; i < words.length; i++) {
    let word = words[i]

    if (short === null || word.length < short.length){
      short = word
    }
  }
  return short 
}

console.log(shortestWord('app academy is cool'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
