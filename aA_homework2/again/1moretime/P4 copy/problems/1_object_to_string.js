/*******************************************************************************
Write a function `objectToString(count)` that takes in a char count object and
returns a string representing the counts of each character.

Examples:

objectToString({a : 2, b: 4, c: 1}) => 'aabbbbc'
objectToString({b: 1, o: 2, t: 1}) => 'boot'
*******************************************************************************/

function objectToString(count) {
  let str = ''
  for (let key in count){
    for (let i = 0; i < count[key]; i++) {
      str += key
    }
  }
  return str
}

console.log(objectToString({a : 2, b: 4, c: 1}))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = objectToString;
