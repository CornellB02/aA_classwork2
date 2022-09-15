/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  // your code here...
}

function removeVowels(word){
  let vowels = 'aioeuAEIOU'
  let str = ''
  for (let i = 0; i < word.length; i++){
    let char = word[i]
    if(!vowels.includes(char)){
      str += char
    }
  }
  return str
}

console.log(removeVowels('bootcamp'))
console.log(removeVowels('PREP'))
console.log(removeVowels('hello world'))
console.log(removeVowels('bootcamp'))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
