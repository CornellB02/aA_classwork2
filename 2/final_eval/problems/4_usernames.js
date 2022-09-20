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
var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

function usernames(names) {
  let array = []
  for (let i = 0; i < names.length; i++){
    let person = names[i]
    let firstLast = person.split(' ')
    let username = firstLast[0][0].toLowerCase() + firstLast[1].toLowerCase()
    array.push(username)
  }
  return array
}

console.log(usernames(names)); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ])

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
