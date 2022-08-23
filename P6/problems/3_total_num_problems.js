/******************************************************************************
Write a function totalNumProblems(assessments) that takes in an object of assessment
objects. The function should return the total number of problems in all assessments.

Example:

var assessments = {
  w1d5: {
    totalPoints: 7,
    problems: ['range', 'reverseSentence', 'unique', 'fizzBuzz', 'stringRange']
  },
  w2d1: {
    totalPoints: 10,
    problems: ['reverseRange', 'isPrime', 'magicNumbers', 'firstAndLast', 'royalWe']
  },
  w2d5: {
    totalPoints: 7,
    problems: ['myIndexOf', 'minMaxDifference', 'divisibleBy', 'dynamicFizzBuzz', 'magicCipher']
  },
  w3d1: {
    totalPoints: 7,
    problems: ['arrayBuilder', 'longestWord', 'leastCommonMultiple', 'sillyCipher', 'hipsterfy']
  },
  w3d5: {
    totalPoints: 5,
    problems: ['highestScore', 'snakeToCamel', 'sum2DArray', 'minValueCallback', 'mySelect']
  },
  w4d1: {
    totalPoints: 5,
    problems: ['not', 'so', 'fast']
  },
  w4d5: {
    totalPoints: 4,
    problems: [':)']
  }
}

totalNumProblems(assessments) => 29
*******************************************************************************/

// Example:

let assessments = {
  w1d5: {
    totalPoints: 7,
    problems: ['range', 'reverseSentence', 'unique', 'fizzBuzz', 'stringRange']
  },
  w2d1: {
    totalPoints: 10,
    problems: ['reverseRange', 'isPrime', 'magicNumbers', 'firstAndLast', 'royalWe']
  },
  w2d5: {
    totalPoints: 7,
    problems: ['myIndexOf', 'minMaxDifference', 'divisibleBy', 'dynamicFizzBuzz', 'magicCipher']
  },
  w3d1: {
    totalPoints: 7,
    problems: ['arrayBuilder', 'longestWord', 'leastCommonMultiple', 'sillyCipher', 'hipsterfy']
  },
  w3d5: {
    totalPoints: 5,
    problems: ['highestScore', 'snakeToCamel', 'sum2DArray', 'minValueCallback', 'mySelect']
  },
  w4d1: {
    totalPoints: 5,
    problems: ['not', 'so', 'fast']
  },
  w4d5: {
    totalPoints: 4,
    problems: [':)']
  }
}

totalNumProblems(assessments)// => 29
function totalNumProblems(assessments) {
  let total = 0;
  for (let key in assessments){
    let assessment = assessments[key]
    total += assessment.problems.length
  }
  return total
}

console.log(totalNumProblems(assessments))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = totalNumProblems;
