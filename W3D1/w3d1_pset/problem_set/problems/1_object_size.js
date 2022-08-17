/***********************************************************************
Write a function `objectSize(obj)` that takes in an object and returns
the number of key-value pairs in the object.

Examples:

var obj1 = {
  name: 'Fido',
  age: '4'
}

objectSize(obj1); // => 2

var obj2 = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
}

objectSize(obj2); // => 3
***********************************************************************/

function objectSize(obj) {
  let size = 0
  for (let k in obj) {
    size += 1
  }
  return size
} 


// Write a function `reverb(word)` that takes in a word string and returns
// the word with all characters after the last vowel repeated.

// Examples:

// reverb('running'); // => 'runninging'
// reverb('wild'); // => 'wildild'
// reverb('debugged'); // => 'debuggeded'
// reverb('my'); // => 'my'

function reverb(word){
  let vowels = ["a","e","i","o","u"]
  for (let i = word.length - 1; i > 0; i--){
    char = word[i]
    if (vowels.indexOf(char) > -1){
      let end = word.slice(i)
      return word + end 
    }
  }
  return word
}

console.log(reverb('debugged'))




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = objectSize;
