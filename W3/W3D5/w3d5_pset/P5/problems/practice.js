// Write a function reverse2D(array) that takes in a 2D array of strings. The function
// should return a string representing the elements of the array in reverse order.

// Examples:

var arr1 = [
  ['time', 'some', 'ball', 'play'],
  ['and', 'park'],
  ['to', 'go', 'lets']
];

reverse2D(arr1) 


var arr2 = [
  ['1', '2', '3'],
  ['4', '5']
];
reverse2D(arr2) 

function reverse2D(array){
    let str = ''
    for (let i = array.length - 1; i >= 0; i--){
        let arr = array[i];
        for (let j = arr.length - 1; j >= 0; j--){
            let ele = arr[j]
            str += ele
        }

    }
    return str 
}


console.log(reverse2D(arr2))
console.log(reverse2D(arr1))


// Write a funtion averageCallback(num1, num2, cb) that takes in two numbers and a
// callback function. The function should return the result of the callback function
// when passed the average of the two numbers.

// Examples:

function averageCallback(num1, num2, cb) {
    let average = num1 * num2 / 2
    return cb(average)
} 

console.log(averageCallback(-2, 6, Math.abs)) 
console.log(averageCallback(12, 3, Math.sqrt)) 


// Write a function isPassing(assessments) that takes in an array of assessment objects.
// The function should return a true if the average assessment score is at least 70.
// It should return false otherwise.

// Examples:

let assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

isPassing(assessments1)// => true


let assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

isPassing(assessments2)// => false

function isPassing(assessments){
    let score = 0
    for (i = 0; i < assessments.length; i++){
        let assessment = assessments[i];
        score += assessment.score
        let ave = score / assessments.length
        if (ave >= 70){
            return true
        } 
    } 
    return false
}

console.log(isPassing(assessments2))
console.log(isPassing(assessments1))

// Write a function greaterCallback(num, cb1, cb2) that takes in a number and two
// callback functions. The greaterCallback function should pass the number to
// both callbacks and return the result of the callback that is the greater value.

// Examples:'

function greaterCallback(num, cb1, cb2){
    if (cb1(num) > cb2(num)){
        return cb1(num);
    } else return cb2(num)
    }


console.log(greaterCallback(9000, Math.abs, Math.sqrt))
console.log(greaterCallback(843.6336, Math.floor, Math.ceil))


greaterCallback(25, Math.abs, Math.sqrt)// => 25
greaterCallback(16.6, Math.floor, Math.ceil)//=> 17

// Write a function variableNameify(words) that takes in an array of words. The function
// should return a string representing the variable name obtained by combining the
// words and captitalizing them in mixCased style.

// Examples:

function variableNameify(words){
    let str = ''
    for (i = 0; i < words.length; i++){
        word = words[i]
        first = word.toLowerCase()
        cap = word[0].toUpperCase() + word.slice(1).toLowerCase()
        if (i === 0){
            str += first
        } else {
            str += cap
        }
    }
    return str
}

variableNameify(['is', 'prime']) //=> 'isPrime'
variableNameify(['remove', 'last', 'vowel']) //=> 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) //=> 'maxValue'


console.log(variableNameify(['is', 'prime']))
console.log(variableNameify(['remove', 'last', 'vowel']))
console.log(variableNameify(['MaX', 'VALUE']))



// Write a function greaterCallback(num, cb1, cb2) that takes in a number and two
// callback functions. The greaterCallback function should pass the number to
// both callbacks and return the result of the callback that is the greater value.

// Examples:

// greaterCallback(62, Math.log, Math.random) 
// greaterCallback(3.821, Math.floor, Math.sqrt) 

function greaterCallback(num, cb1, cb2){
    if (cb1(num) > cb2(num)){
        return cb1(num);
    } else return cb2(num)
}

console.log(greaterCallback(62.88888, Math.log, Math.round))
console.log(greaterCallback(3.821, Math.floor, Math.sqrt))


// function rollDie(){
//    return Math.floor(Math.random() * 6) + 1
// }

console.log(rollDie())