/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  let sen = sentence.split(' ')
  let shortest = sen[0]
  for (let i = 0; i < sen.length; i++){
    let words = sen[i]
    if(words.length < shortest.length){
      shortest = words
      // console.log(shortest)
    }
  }
  return shortest
}


console.log(shortestWord('app academy is cool'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
