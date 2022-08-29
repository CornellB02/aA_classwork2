/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

// function disemvowel(string) {
//   vowels = "AEIOUaeiou"
//   str = string.split(' ')
//   for (let i = 0;  )
// }


function oddSum(nums){
  let count = 0 
  for (let i = 0; i < nums.length; i ++){
    let number = nums[i]
    if (number % 2 !== 0) {
      count += number
      
    }
    
  }
  return count
}

console.log(oddSum([5, 4, 6, 13, 1]))

function biggerFilter(arry, target){
  array = []
  for (let i = 0; i <= arry.length; i++){
    let num = arry[i]
    if (target < num){
      array.push(num)
    }
  }
  return array
}

console.log(biggerFilter([7, 3, 2, 8, 12], 5))

function strangeWords(words) {
  let newWord = [];
  let letter = 'e'
  for (let i = 0; i < words.length; i++){
    let word = words[i]
    if ((word.length < 6) || (word[0] === letter) && !(word.length < 6) && (word[0] === letter))
    newWord.push(word)
  }
  return newWord
}

function positivePro (array){
  let product = 1
  for (let i = 0; i <= array.length; i++){
    let num = array[i];
    if (num > 0){
      product *= num
    }
  }
  return product
}

console.log(strangeWords(["tacos", "eggs"]))

console.log(positivePro([-1, 4, 3, -3, 2]))
console.log(positivePro([5, -2, 5,]))


function funnyphrase(words) {
  let newWord = [];
  let letter = "y"
  for (let i = 0; i < words.length; i++){
    let word = words[i]
    if ((word.length >= 6) && (word[word.length - 1] === letter)) {
      newWord.push(word)

    }
  }
  return newWord 
}

console.log(funnyphrase(["absolutely", "fly", "sorry", "excellent","taxonomy", "eighty"]))
console.log(funnyphrase(["terrible", "normally", "naughty", "party",]))
console.log(funnyphrase(["tour", "guy", "pizza"]))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = disemvowel;
