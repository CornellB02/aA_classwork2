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


Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

// usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]


function usernames(names) {
  let users = []
  for (let i = 0; i < names.length; i++){
    let firstLast = names[i]
    let person = firstLast.split(' ')
    let username = person[0][0].toLowerCase() + person[1].toLowerCase()
    users.push(username)
  
  }
return users
}

console.log(usernames(names))

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
