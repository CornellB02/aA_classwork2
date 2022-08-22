// function decomposition - define "helper function" - clearer readability 
// initalize a sum var that will collect the prime numbers below number 
//
function laligatSum(num) {
    sum = 0 

    for (let i = 2;i <= num; n++){
        if(isPrime(n)) {
            sum += n;
        }
    }
    return sum
}

function isPrime(num) {
    if (num < 2) return false;

    for (let n = 2; n < num; n++){
        if (num % n === 0 ){
            return false 
        }
    }
}


// console.log()


// obnjects:

// let cat = {
//     name: "whiskers"

let dog = {}

dog["name"] = 'fido'
dog['age'] = 4;
dog['color'] = 'brown'

console.log[dog]
//key in object with a for n loop 
//for let key in object


function elementCount(word) {
    let obj = {};
    for (let i = 0;i < word.length; i++) {
        let char = word[i]
        if (obj[char] === undefined) {
            obj[char] = 1
        } else {
            obj[char]+= 1
        }
    }
    return obj
}

console.log(elementCount('suuuckkkitt'))