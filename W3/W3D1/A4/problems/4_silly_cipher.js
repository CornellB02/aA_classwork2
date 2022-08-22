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
  let Str = "";
  
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (cipher[char] === undefined) {
      Str += '.';
    } else {
      Str += cipher[char];
    }
  }

  return Str;
}

obj = {'a':2, 'b':3, 'c':[2,3,4], 'd':{'ab': 21}}

console.log(obj[c])

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = sillyCipher;
