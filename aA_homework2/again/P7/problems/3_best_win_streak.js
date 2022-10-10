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

function bestWinStreak(str) {
  let streak = 0
  let longest = 0
  for (let i = 0; i < str.length; i++){
    let char = str[i]
    // console.log(char)
    if(char === 'W'){
      streak ++
    } if (streak > longest){
      longest = streak
    } else {
      if (char !== 'W'){
        streak = 0
      }
    }
  }
  return longest
}

console.log(bestWinStreak('WWLWWWLWW'))// => 3
console.log(bestWinStreak('WWLLWWWWW'))// => 5
console.log(bestWinStreak('WWWW'))// => 4
console.log(bestWinStreak('LLL'))// => 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;
