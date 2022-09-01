/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/
/// initialie a words array by spliting the scentance at the spaces to give me a array of new words 
// init a new scentance array 
// loop thru the words array backwards 
/// at ever iteration I want to push at the newSen
//

function reverseSentence(sentence) {
  let sen = sentence.split(" ")
  let arr = []
  for (let i = sen.length - 1; i >= 0; i--){
    let word = sen[i]
    arr.push(word)
  }
  return arr.join(" ")
}


//   let arr = []
//   for (let i = 1; i < sentence; i -= 1)
// }
console.log(reverseSentence("Jump, jump for joy"))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
