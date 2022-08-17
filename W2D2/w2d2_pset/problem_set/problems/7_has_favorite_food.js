/***********************************************************************
Write a function `hasFavoriteFood(obj, food)` that takes in an object
and a food string. The function should return true if the object has
that favorite food. See the examples below.

Examples:

var dog = {
  name: 'Fido',
  favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
}

hasFavoriteFood(dog, 'sausage'); // => true
hasFavoriteFood(dog, 'cat food'); // => false

var person = {
  name: 'Al',
  favoriteFoods: ['pizza', 'burgers', 'ramen']
}

hasFavoriteFood(person, 'burgers'); // => true
hasFavoriteFood(person, 'fish'); // => false

i know that i have an object taht is being passed in 
also know that i have a food string  that is being passed in 
i know that the fav foods value is an array 
i need ti key into the fav food to get the array
***********************************************************************/

function hasFavoriteFood(obj, food) {

  // console.log(food)
  // console.log(obj)
  // console.log(obj.favoriteFoods)
  // console.log(obj.favoriteFoods.includes(food))

  return obj.favoriteFoods.includes(food)
}

let dog = {
  name: 'Fido',
  favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
}

console.log(hasFavoriteFood(dog, 'sausage')); // => true
console.log(hasFavoriteFood(dog, 'cat food')); // => false
console.log(hasFavoriteFood(person, 'burgers')); // => true
console.log(hasFavoriteFood(person, 'fish')); // => false

// let person = {
//   name: 'Al',
//   favoriteFoods: ['pizza', 'burgers', 'ramen']
// }
// let arr = ['ab', 'cd', 'ef']


//  person.favoriteFoods.includes
// arr.incules('cd')


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hasFavoriteFood;
