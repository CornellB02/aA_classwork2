/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
***********************************************************************/
// function dotCount ()

function moreDotLessDash(str) {
    let dot = "."
    let dash = "-"
    let dotcount = 0
    let dashcount = 0
    for (let i = 0; i < str.length; i++){
        let ele = str[i]
        if (dot.includes(ele)){
            dotcount ++ ;
        } else if (dash.includes(ele)){
                dashcount ++ ;
            }
        } 
        return dotcount > dashcount
    }



console.log(moreDotLessDash('2-D arrays are fun. I think.'))
console.log(moreDotLessDash('.-'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = moreDotLessDash;
