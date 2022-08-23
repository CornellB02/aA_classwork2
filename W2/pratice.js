// Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
// function should return true if the arrays have different lengths. The
// function should return false otherwise.

// Examples:

var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

diffArrayLen(a1, a2); // => false
diffArrayLen(a1, a3); // => true


function diffArrayLen(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        if (arr1.length !== arr2.length){
            return true
        } else return false
    }
}

console.log(diffArrayLen(a1, a3))
console.log(diffArrayLen(a1, a2))

// Write a function `mirrorArray(array)` that takes in an array as an
// argument and returns a new array "mirrored" as shown in the examples:

// Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

function mirrorArray(array){
    let arr = []
    for (let i = 0; i < array.length; i++){
        let ele = array[i]
        arr.push(ele)
    }
        for (let i = array.length -1; i >= 0; i--){
            let ele2 = array[i]
            arr.push(ele2)
        }

        return arr
    }


console.log(mirrorArray([1,2,3]))

// Write a function `avgValue(array)` that takes in an array of numbers and
// returns the average number.

// Examples:

function avgValue(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++){
        let num = array[i]
        sum += num 
        average = sum / array.length
    }
    return average
}

console.log(avgValue([10, 20])); // => 15
console.log(avgValue([2, 3, 7])); // => 4
console.log(avgValue([100, 60, 64])); // => 74.66666666666667


// Write a function `abbreviate(sentence)` that takes in a sentence string
// and returns a new sentence where words longer than 4 characters have
// their vowels removed. Assume the sentence has all lowercase characters.
// Feel free to use the array below in your solution:

function abbreviate(sentence) {
    let array = []
    let sen = sentence.split(' ')

    for (let i = 0; i < sen.length; i++){
        words = sen[i]

        if(words.length >= 4) {
            let noVowel = removeVow(words)
            array.push(noVowel)
        } else {
            array.push(words)
        }
    }
    return array.join(' ')
}



function removeVow(word) {
let vowels = ['a', 'e', 'i', 'o', 'u'];
let str = ''

for (let i = 0; i < word.length; i++){
    char = word[i]

    if (vowels.indexOf(char) === -1){
        str += char
    }
}
return str

}

// Examples:

console.log(abbreviate('bootcamp prep is fun')); // => 'btcmp prep is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'


// Write a function `firstLastCap(sentence)` that takes in a sentence and
// returns a new sentence where the first and last letters of each word is
// uppercase. All other characters should be lowercase.

// Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'


function firstLastCap(sentence){
    let arr = []
    sen = sentence.split(' ')
    for (let i = 0; i < sen.length; i++){
        let word = sen[i]
        newWord = word.toLowerCase()
        firstLet = word[0].toUpperCase()
        lastLet = word[newWord.length - 1].toUpperCase()
        words = firstLet + newWord.slice(1, -1) + lastLet
        arr.push(words)
    }
    return arr.join(' ')
}


console.log(firstLastCap('hello BOOTCAMP PrEp'))
console.log(firstLastCap('what is on the radio'))
// console.log()

function catBuilder(name, color, toys) {
    let cat = {}
    cat.name = name;
    cat['color'] = color;
    cat['toys'] = toys;

    return cat

}

function personBuilder(age, height, weight, name) {
    let person = {}
    person.age = currentyear - birthyear + 'yrs old'
    person.height = whatIshouldBe - reality + 'ft'
    person['weight'] = weight
    person.name = name[0].toUpperCase() + name.slice(1)

    return person

}
let currentyear = 2022
let whatIshouldBe = 12
// let name = 

let person1 = personBuilder(birthyear = '1995', reality = 6  , '200lbs', 'jizzleman')

let cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);

let cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);

console.log(person1)

console.log(cat1)