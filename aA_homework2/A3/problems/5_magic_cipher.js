/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

// function magicCipher(sentence, cipher){
//   let letter = sentence.split("")
//   arr = []

//   for (i = 0; i < letter.length; i ++){
//     let char = letter[i]

//     if (cipher[char] !== undefined) {
//       arr.push(cipher[char])

//     } else {
//       arr.push(char)
//     }

//   }
// return arr.join(' ')
// }

function magizzyChipher(sentence, cipher){
  let letter = sentence.split("")
  arr = []

  for(let i = 0; i < letter.length; i++){
    let char = letter[i]

    if (cipher[char] !== undefined) {
      arr.push(cipher[char])

    } else {
      arr.push(char)
    }

  }
  return arr.join('')
}



console.log(magizzyChipher("add me on facebook" , { a : "c", d : "q"})) //=> "cqq me on fccebook"
// console.log(magicCipher("twmce" , { m : "n", t : "d", w : "a"}))// => "dance"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = magicCipher;
