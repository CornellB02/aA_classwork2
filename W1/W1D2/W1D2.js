// let num = 33
// if (num % 3 === 0) {
//     console.log('isOdd')
// } else {
//     console.log('isEven')
// }

// console.log(isOdd(2));    // => false
// console.log(isOdd(5));    // => true
// console.log(isOdd(-17));  // => true

// function isOdd(num) {
//     if (num % 2 !== 0) {
//    return true
//     } else {
//         return false 
//     }
// }


// console.log(plusFive(10));  // => 15
// plusFive((2));   // => 7
// plusFive((-8));  // => -3

// FUCTION!!!!!

// function plusFive (num) {
//    return num + 5
// }
  
// let sym = plusFive(100)
console.log(sym)
console.log(plusFive(100))


// function threeOrSeven(num) {
//    return num % 3 === 0 || num === 7
// }
   
//    console.log(threeOrSeven(29))
//    console.log(threeOrSeven(38))
//    console.log(threeOrSeven(2881))
//    console.log(threeOrSeven(273))

// function averageOfFour(num1, num2, num3, num4) {
//    return (num1 + num2 + num3 + num4) / 4
// }

// console.log(averageOfFour(2,3,5,6)) // 4
// console.log(averageOfFour(7,98,4,78)) // 46.75
// console.log(averageOfFour(33,8,10,6)) // 14.25
// console.log(averageOfFour(55,2,81,0)) // 34.5

// function isEven(num) {
//    if (num % 2 === 0) {
//       return true 
//    } else {
//       return false
//    }


// }
// console.log(isEven(7)) 
// console.log(isEven(828))
// console.log(isEven(66293))


// let sym = plusFive(100)
// console.log(sym)
// console.log(plusFive(100))

// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."

function whisper(str) {
  return "..."+str.toLowerCase()+"...";
  return `...${str.toLowerCase()}...`
}

console.log(whisper("Hey Cornell"))


// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
function isSubstring(searchString, subString) {
   // your code here...
 }
function Hello(str) {
   return `Hello ${str}`
}

// console.log(Hello("child"));    // prints "Hello, child"
// Hello("Anthony");  // prints "Hello, Anthony"
// //
// function isSubstring(searchString, subString) {

//    if (searchString.toLowerCase().indexOf(subString.LowerCase())) {

//    }
 

// // let lowerSearch


// // Write a function `echo` that takes in a string and returns that string "echo-ized".
// //
// // Examples:
// console.log(echo("Mom!")); // => "MOM! ... Mom! ... mom!"
// console.log(echo("hey")); // => "HEY ... hey ... hey"
// console.log(echo("JUMp")); // => "JUMP ... JUMp ... jump"
// // //
function echo(string) {

let upperWord = string.toUpperCase();
let lowWord = string.toLowerCase();

return upperWord+'...'+string+'...'+lowWord
}

// function printRange(start,end) {
//    for (let i = start; i<= end; i++)
//    {console.log(i)}
// }

// printRange(1,10)


// function PrintChars(sentence) {
//    for (let i = 0; i < sentence.length)
// }

// isPrime
// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.

function isPrime(num) {
   for (let i=2; i < num;i++){
        if (num % i === 0){
           return false;
        }
   } return true
} 
console.log(isPrime(71))



// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

function isOdd(num) {
    if (num % 2 === 0){
        return false
    } else{
        return true
    }
}

  console.log(isOdd(90))

  function isOdd(num) {
    return (num % 2 !== 0);
  }

  // Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
function threeOrSeven(num) {
    return (num % 3 === 0 || num % 7 === 0)
}

console.log(threeOrSeven(9))

// function threeOrSeven(num) {
//     if (num % 3 === 0 || num % 7 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
// function hello(str) {
//     console.log("Hello," + str + ".")
// }
    
// hello("cj")

// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// // whisper("Hey Anthony"); // => "...hey anthony..."
// function whisper(string) {
//     // let lowWord = string.toLowercase();
//     console.log("..." + string.toLowerCase() + "...")
// }

// whisper("YEA! that was fun"); // => "...yea! that was fun..."


// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
// function isSubstring(searchString, subString) {
//    return searchString.indexOf(subString) > -1;
//   }

//   console.log(isSubstring("The cat went to the store", "he cat went"))