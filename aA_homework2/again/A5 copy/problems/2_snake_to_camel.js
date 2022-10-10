/*******************************************************************************
Write a function snakeToCamel(str) that takes in a snake_cased string and returns
the string CamelCased. snake_case is a string where each word is separated with
underscores (_). CamelCase is a string where the first char of each word
is capitalized, all other characters lowercase.

Examples:

snakeToCamel('snakes_go_hiss'); // => 'SnakesGoHiss'
snakeToCamel('say_hello_world'); // => 'SayHelloWorld'
snakeToCamel('bootcamp_prep_is_cool'); // => 'BootcampPrepIsCool'
snakeToCamel('BOOtcamp_PREP_iS_cOol'); // => 'BootcampPrepIsCool'
*******************************************************************************/

function snakeToCamel(str) {
  let words = str.split('_')
  let newS = ''
  for (let i = 0; i < words.length; i++){
    let word = words[i]
    // console.log(word)
    let camelCase = word[0].toUpperCase() + word.slice(1).toLowerCase()
    newS += camelCase
  }
  return newS
}



















// function snakeToCamel(str) {
//   let sen = str.split('_')
//   let snake = ''
//   for (let i = 0; i < sen.length; i++){
//     let word = sen[i]
//     snake += word[0].toUpperCase() + word.slice(1).toLowerCase()
//   }
//   return snake
// }



console.log(snakeToCamel('snakes_go_hiss'))
console.log(snakeToCamel('say_hello_world'))
console.log(snakeToCamel('bootcamp_prep_is_cool'))
console.log(snakeToCamel('BOOtcamp_PREP_iS_cOol'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = snakeToCamel;
