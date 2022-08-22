/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
  let str = ''
  for (i = 0; i < words.length; i++){
    let word = words[i]
    let first = word[0].toLowerCase()
    let upperWord = word[0].toUpperCase() + word.slice(1).toLowerCase()
    // let letter = word[i]
    if (i === 0){
      str += first
    } else {
      str += upperWord
    }
  }
  return str
}

console.log(variableNameify(['is', 'prime']))// => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel']))// => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE']))// => 'maxValue'

// console.log(typeof variableNameify(['is', 'prime']))

// function firstLetter(element) {
//   let string = ''
//   for (i = 0; i < elenemt.length; i++){
//     ele = element[i];
//     let Cap = ele[0].toUpperCase + ele.slice(1).toLowerCase
//     string += Cap
//   }
//   return string 
// }

// console.log(firstLetter(money))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
