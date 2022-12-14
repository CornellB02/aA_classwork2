/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

// function bestWinStreak(str) {
//   let streak = 0
//   let longest = 0
//   for (let i = 0; i <= str.length; i++){
//     let char = str[i]
//     // console.log(char)
//     nextChar = str[i+1]
//     if (char === nextChar){
//       streak += 1
//       if (streak > longest){
//         longest = streak 
//       } else {
//         streak = 0
//     }
//     }
//     }
//   return longest
// }

function bestWinStreak(str) {
  let streak = 0 
  let longest = 0 

  for (let i = 0; i < str.length; i++){
    if(str[i] === 'W'){
      streak += 1

      if(streak > longest){
        longest = streak 
       }
      } else {
        streak = 0 
    }
  }
  return longest
}


console.log(bestWinStreak('WWLWWWLWW'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;
