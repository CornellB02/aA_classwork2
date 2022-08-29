/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/

let names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

function usernames(names) {
  let newNames = []
  for (let i = 0; i < names.length; i++){
    full = names[i]
    newNames.push(nameSplit(full))
  }
  return newNames
  
}

function nameSplit(name) {
  let newWord = ''
  let two = name.split(' ')
  let letter = two[0][0].toLowerCase()
  let lastNamed = two[1].toLowerCase()
  newWord += letter + lastNamed
  return newWord
}

console.log(nameSplit('big cat'))
/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
