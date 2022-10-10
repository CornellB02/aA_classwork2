/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/
function sillyCipher(sentence, cipher){
  let silly = []
  for (let i = 0; i < sentence.length; i++){
    let char = sentence[i]
    if(cipher[char] !== undefined){
      silly.push(cipher[char])
    } else {
      silly.push('.')
    }
  }
  return silly
}












// function sillyCipher(sentence, cipher){
//   let silly = []
//   for (let i = 0; i < sentence.length; i++){
//     let ele = sentence[i]
//     if(cipher[ele] !== undefined){
//       silly.push(cipher[ele])
//     } else {
//       if(cipher[ele] === undefined){
//         silly.push('.')
//       }
//     }
//   }
//   return silly.join('')
// }


console.log(sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}))
console.log(sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
