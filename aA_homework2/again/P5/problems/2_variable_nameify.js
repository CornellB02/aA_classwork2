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
  let str = words[0].toLowerCase()
  for (let i = 1; i < words.length; i++){
    let word = words[i]
    camelCase = word[0].toUpperCase() + word.slice(1).toLowerCase()
    // console.log(camelCase)
    str += camelCase
  }
  return str 
}

console.log(variableNameify(['remove', 'last', 'vowel']))
console.log(variableNameify(['is', 'prime']))
console.log(variableNameify(['MaX', 'VALUE']))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
