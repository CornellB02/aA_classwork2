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
 
//  highestScore(students); //=> 'TD2'




function highestScore(students) {
  let str = ''
  let hiScore = students[0].score
  let id = students[0].id
  let value = 0
  for (let i = 0; i < students.length; i++){
    let student = students[i]
    if (hiScore < student.score){
      hiScore = student.score
      value = i
      id = student.id
    }
  }
  let initals = students[value].name.split(' ')
  str += initals[0][0] + initals[1][0] + id
  return str
}







// function highestScore(students) {
//   let str = ''
//   hiScore = students[0].score
//   value = 0
//   id = students[0].id
//   for (let i = 0; i < students.length; i++){
//     if(students[i].score > hiScore){
//       hiScore = students[i].score 
//       id = students[i].id
//       value = i
//     }
//   }
//   let initals = students[value].name.split(' ')
//   str += initals[0][0] + initals[1][0] + id
//   return str
// }


















// function highestScore(students) {
//   let value = 0
//   let hiScore = students[0].score 
//   let id = students[0].id
//   let str = ''
//   for (let i = 0; i < students.length; i++){
//     if(students[i].score > hiScore){
//       hiScore = students[i].score
//       id = students[i].id
//       value = i
//     }
//   }
//   let initals = students[value].name.split(' ')
//   str += initals[0][0] + initals[1][0] + id
//   return str
// }



// function highestScore(students) {
//     let str = ''
//     let highest = students[0].score
//     let value = 0
//     let id = students[0].id
//     for (let i = 0; i < students.length; i++){
//       if (students[i].score > highest){
//         console.log(value)
//         value = i
//         highest = students[i].score
//         id = students[i].id
//          }
//        }
//        let initals = students[value].name.split(' ')
//        str += initals[0][0] + initals[1][0] + id
//        return str 
//     }



    // function highestScore(students){
    //   let str = ''
    //   let hiScore = students[0].score
    //   let value = 0
    //   let id = students[0].id
    //   for (let i = 0; i < students.length; i++){
    //     if(students[i].score > hiScore){
    //        id = students[i].id
    //        hiScore = students[i].score
    //        value = i
    //     }
    //   }
    //   let initals = students[value].name.split(' ')
    //   str += initals[0][0] + initals[1][0] + id
    //   return str
    // }

console.log(highestScore(students));

// var students = [
//   {name: 'Alvin Zablan', id: 128, score: -42},
//   {name: 'Eliot Bradshaw', id: 32, score: 57},
//   {name: 'Tommy Duek', id: 2, score: 99},
//   {name: 'Fred Sladkey', id: 256, score: 94}
//  ];

// function highestScore(students) {
//   let newStr = ''
//   let highScore = students[0].score
//   let id = students[0].id
//   let value = 0
//   for (let i = 0; i < students.length; i++){
//     if(students[i].score > highScore){
//       highScore = students[i].score 
//       id = students[i].id
//       value = i
//     }
//   }
  
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
