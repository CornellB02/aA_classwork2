/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  let str = ''
  let vowels = 'aeiouAEIOU'
  for (let i = 0; i < string.length; i++){
    let char = string[i]
    if(!vowels.includes(char)){
      str += char
    }

  }
  return str
}

// function vowelRemove(word)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
