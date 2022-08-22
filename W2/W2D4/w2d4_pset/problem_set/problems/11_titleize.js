/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

// if not in the stopWords do not add 
//lowercase for comparison 
// split scentence 
remove punctiations

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice

let word = 'jimmy'
console.log word.slice(0,word.length-1)

let punctuation = [";", "!", ".", "?", ",", "-"];

let removalPunctuation

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"


***********************************************************************/
// function removalPunctuation(word) {
//     let newWord = word.slice (0, word .length - 1);
//     return newWord
// }

// function isStopWord(word, stopWords) {
// let lowerCaseWord = word.toLowerCase();
// return stopWords.includes(lowerCaseWord);

// }

function titleize(title, stopWords) {
    let punc = '.,!?';
    let words = title.split(' ');
    let newSen = [];
    let puncChar = ''
    for(let i = 0; i < words.length; i++) {
        let word = word[i]
        if (punc.includes (word[word.length - 1])){
            puncChar = word[word .length - 1];
            word = removalPunctuation(word);
        
    }
            if (isStopWord(word, stopWords)){
                let newWord = word.toLowerCase();
            } else {
                newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
            newWord += puncChar
            newSen .push(newWord)
    }
return newSen.join(' ')

    }

console.log(titleize("shall we dance?", ["dance"]))
// let punk = '.,?!'

// word = 'dance?'

// let ele = word[word.length - 1]

// console.log(ele)

// newWord = word.slice(0, word.length - 1)

// console.log(newWord)



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = titleize;
