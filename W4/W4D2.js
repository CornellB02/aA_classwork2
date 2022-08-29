function lastIndex(str, char) { // function
    for(let i = str.length - 1 ; i >= 0; i--){ // reverse for loop set i to exact index of str
    let ele = str[i]; // make a variable for your charaters in the string
      if (ele === char){ // compare the element to the char in question
        return i // return the index of the char
       }
      
    }
      
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7

function mostVowels(sentence) {
    let counts = {}; // make a emopthy object 
    let words = sentence.split(" "); // split the sentence 

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        counts[word] = countVowels(word);
    }

    let largestNum = 0;
    let largestWord = "";

    for (key in counts) {
        if (counts[key] > largestNum) {
            largestNum = counts[key];
            largestWord = key;
        }
    }

    return largestWord;
}

function countVowels(word) {
    let count = 0;
    let vowels ="aeiou";

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }

    return count;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"

function mostVowels (sentence){
    let counts = {};
    let sen = sentence.split(" ")
    for (let i = 0; i < sen.length; i++){
        word = sen[i]
        counts[word] = countVowels(word)
    }
    largestNum = 0
    largestWord = ""

    for (key in counts){
        if (counts[key] > largestNum){
            largestNum = counts[key];
            largestWord = key;
        }

    }
    return largestWord
}

function countVowels(word){
    count = 0;
    vowels = 'aeiou'
    for (let i = 0; i < word.length; i++){
        if (vowels.includes(word[i])){
            count += 1
        }
    }
    return count
}



function prime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function pickPrime(array) { 
    newNum = []
    for (i = 0; i < array.length; i++){
        let num = array[i]
        if ((num % 2 !== 0) || (num === 2)){
            newNum.push(num)
        }
    }
    return newNum
}
// if (num % 2 !== 0) { 
    // newNums.push(num)         }      }
            
        
        
    



console.log(pickPrime([9]));  // [2, 3, 5]
console.log(pickPrime([101, 20, 103, 2017]));  // [101, 103, 2017]


function anagrams(str1, str2){
    if(str1.length !== str2.length) return false;
  
    let wordCount = {};
    for(let i = 0; i < str1.length; i++){
      let char1 = str1[i];
      let char2 = str2[i];
  
      if(char1 in wordCount){
        wordCount[char1]++;
      } else {
        wordCount[char1] = 1;
      }
  
      if(char2 in wordCount){
        wordCount[char2]--;
      } else {
        wordCount[char2] = -1;
      }
    }
  
    for (let key in wordCount) {
      if (wordCount[key] !== 0) return false;
    }
  
    return true
  }

  