/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

var students = [
  {name: 'Alvin Zablan', id: 128, score: -42},
  {name: 'Eliot Bradshaw', id: 32, score: 57},
  {name: 'Tommy Duek', id: 2, score: 99},
  {name: 'Fred Sladkey', id: 256, score: 94}
 ];
 


// function highestScore(students) {
//   let str = ''
//   let highest = students[0].score
//   let value = 0
//   let id = students[0].id
//   for (let i = 0; i < students.length; i++){
//     if (students[i].score > highest){ 
//       value = i;
//       highest = students[i].score
//       id = students[i].id;
//     }
//   }
//   let initals = students[value].name.split(' ')
//   return initals[0][0] + initals[1][0] + id
// }

function highestScore(students) {
  let str = ''
  let highest = students[0]
  
  for (let i = 0; i < students.length; i++){
    if (students[i].score > highest.score){ 
      highest = students[i]
    }
  }
  console.log(highest)
  // let initals = students[value].name.split(' ')
  // return initals[0][0] + initals[1][0] + id
}
    // arr.push(name)
    // for (let j = 0; j < arr.length; j++){
    //   let words = arr[j]
    //   letters = words[0].toUpperCase()
    //   let id = student.id
    //   if (student.score > highest){
    //     str += letters + id
//       }
//       return str
//     }
    
//   }
// }

console.log(highestScore(students)); //=> 'TD2')

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
