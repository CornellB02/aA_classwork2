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

// function isPalindrome(sentence) {
//   let sen = sentence.split(' ')
//   let joined = sen.join('')
//   for (let i = 0; i < joined.length; i++){
//     // console.log(joined)
//     let front = joined[i]
//     let back = joined[joined.length - 1 - i]
//     // console.log(back)
//     if (front !== back){
//       return false 
//     }

//   }
//   return true 
// }


function isPalindrome(sentence) {
  let senSplee  = sentence.split(' ')
  let joined = senSplee.join('')
  for(let i = 0; i < joined.length; i++){
    let front = joined[i]
    // console.log(joined)
    let back = joined[joined.length - 1 - i]
    console.log(back)
    if(front !== back){
      return false
    }
  }
  return true
}


console.log(isPalindrome('rats live on no evil star')); // => true
// console.log(isPalindrome('stella won no wallets')); // => true
// console.log(isPalindrome('racecar')); // => true
// console.log(isPalindrome('hello world')); // => false


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
