/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
********************************************************************************************/

// function disemvowel(string) {
//   // your code here...
// }

function disemvowel(word){
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

console.log(disemvowel('bootcamp'))
console.log(disemvowel('PREP'))
console.log(disemvowel('hello world'))
console.log(disemvowel('bootcamp'))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
