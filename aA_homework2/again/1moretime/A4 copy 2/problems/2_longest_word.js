/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) { 
   let sen = sentence.split(' ')
   let longest = ''
   for (let i = 0; i < sen.length; i++){
      if(sen[i].length > longest.length){
         longest = sen[i]
      }
      if(sen[i].length === longest.length){
         longest = sen[i]
      }
   }
   return longest
}
  
console.log(longestWord('app academy is cool'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
