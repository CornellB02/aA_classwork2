/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/

function alternateCase(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++){
        // let char = str[i]
        if (i % 2 === 0){
            newStr += str[i].toUpperCase()
        } else {
            newStr += str[i].toLowerCase()
        }
    } 
    return newStr
}


console.log(alternateCase('BOOTCAMPPREP'))


let arr = [1,2,3,4,5,6,7,8]


console.log(arr.map((ele,idk) => {
    if (idx % 2 ===0) {
        return ele * 2
      } else {
        return ele * -2
      }
    }))



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = alternateCase;
