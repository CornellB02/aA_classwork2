/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
  let sen = sentence.split(" ")
  let join = sen.join('')

  for (i = 0; i < join.length; i++){
    let frontword = join[i]
    let backword = join[join.length - 1 - i]
    // frontsen = sentence[i]
    // backsen = sentence[sentence.length - 1 - i]
    console.log(frontword)
    if (frontword !== backword) {
      return false
    } 

    }
    return true 
  } 


console.log(isPalindrome('rats live on no evil star'))
console.log(isPalindrome('stella won no wallets'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('hello world'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
