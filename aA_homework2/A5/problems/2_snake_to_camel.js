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
let newStr = ''
for (let i = 0; i < words.length; i++){
  let word = words[i]
  let capLet = word[0].toUpperCase()
  let smallEnd = word.slice(1).toLowerCase()
  newStr += capLet + smallEnd
}
return newStr
}

function snakeCase(str){
  let newStr = ''
  let words = str.split(' ')
  for(let i = 0; i < words.length; i++){
    
  }
}



console.log(snakeToCamel('snakes_go_hiss'))
console.log(snakeToCamel('say_hello_world'))
console.log(snakeToCamel('bootcamp_prep_is_cool'))
console.log(snakeToCamel('BOOtcamp_PREP_iS_cOol'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = snakeToCamel;
