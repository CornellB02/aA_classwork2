/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/

function indexOfLastVowel(word) {
  var vowels = 'aeiou';

  for (var i = word.length - 1; i >= 0; i--) {
    var char = word[i];
    if (vowels.indexOf(char) > -1) {
      return i;
    }
  }
}

function revHipWord(word) {
  var vowels = 'aeiou';
  var lastVowelIdx = indexOfLastVowel(word);
  var newWord = '';

  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (vowels.indexOf(char) === -1 || i === lastVowelIdx) {
      newWord += char;
    }
  }

  return newWord;
}

function reverseHipsterfy(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = revHipWord(word);
    newWords.push(newWord);
  }

  return newWords.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
      sum += i;
  }
  return sum;
}

function summationSequence(start, length) {
  let seq = [start];

  for (let i = seq.length; i < length; i++) {
      seq.push(summation(seq[seq.length - 1]));
  }
  return seq;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]



