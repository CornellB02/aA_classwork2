// // var myArray = []

// // myArray

// // console.log(myArray.push(42 , 4))
// // console.log(myArray.push(4))
// // console.log(myArray.push(2))
// // console.log(myArray.push(4))

// // console.log(myArray)

// // console.log(myArray[0])


// var names = ['Skeeter', 'C.J', 'DirectorJ']

// console.log(names)

// console.log(names[0])

// console.log(names.length)
 
// console.log(names.push('Jizza'))

// console.log(names)

// console.log(names[names.length - 1])

// // console.log(names[names.length])

// console.log(names[0] = 'Cornell')

// console.log(names)

// // console.log(names.slice(1, 3))

// // console.log(names.slice(0, 2))

// console.log(names.slice(2))

// console.log(names.push('King'))

// console.log(names.push('WINNING'))

// console.log(names.includes('money'))

// console.log(names.pop())

// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

// function logEach(array) {
//     for (let i = 0; i < array.length; i++){
//         let word = array[i]
//         console.log(i + ":" + word)
//     }
// }

// logEach(["Anthony", "John", "Carson"])


// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

function range(start,end){
    let arr = []
    for(let i = start; i <= end; i++){
        arr.push(i)
    }
    return arr
}

console.log(range(1,4)) //=> [1,2,3,4])

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

function sumArray(array){
    sum = 0
    for (let i = 0; i < array.length; i++){
        let num = array[i]
        sum += num
    }
    return sum
}

console.log(sumArray([5, 6, 4]))
console.log(sumArray([7, 3, 9, 11]))


// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//


function capWords(words){
    let newArr = []
    for (let i = 0; i < words.length; i++){
        let word = words[i].toUpperCase()
        newArr.push(word)
    }
    return newArr
}

console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']


// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'


function wordPeriods(sentence){
    let str = ''
    let sen = sentence.split(' ')
    for (let i = 0; i < sen.length; i++){
        let sen1 = sen[i]
        str += sen1 + '. '
    }
    return str
}

console.log(wordPeriods('what is the weather today'))


// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43

function maxValue(array){
    let max = array[0]
    for (let i = 0; i < array.length; i++){
        let num = array[i]
        if (num > max){
            max = num
        }
    }
    return max
}

console.log(maxValue([12, 6, 43, 2]))
console.log(maxValue([]))
console.log(maxValue([-4, -10, 0.43]))