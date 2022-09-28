/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/


 students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

console.log(passingStudents(students)); // => [ 'Kush', 'Ned' ]

// function passingStudents(students) {
//   let array = []// new arr
//   // let total = 0
//     for(let student of students){ // key into students while making student our variable for the objects(elements) in the array
//       // key = 0
//       let total = 0 // set a total for each of the objects 
//       // let student = students[key]
//       let grade = student.grades // key into the grades value

//       for (let i = 0; i < grade.length; i++){ // there is an array as the value of the grades so we need to loop thru the array
//         obj = grade[i] // set obj as each obj(element) in the arrsy of grades 
//         total += obj.score//increase the total by each number(score) we see in the array of grades
//       }

//       let avg = total / grade.length // multiply the total by the amount of number of grades we added
//       if(avg >= 70){ // set a condition that if the avg number is larger or equal to 70
//         array.push(student.name) // we push the current student name into the new array
//       }
//     }
//     return array  // return the new full array
// }

// function passingStudents(students){
//   let arr = []
//   for(let student of students){
//    let total = 0
//     let grade = student.grades
//     for (let i = 0; i < grade.length; i++){
//       obj = grade[i]
//       total += obj.score 
//     } 

//     let avg = total / grade.length
//     if(avg >= 70){
//       arr.push(student.name)
//     }
//   }
//   return arr
// }

passingStudents(students){
  let arr = []
  for (let student of students){
    let total = 0
    let grade = student.grades 
    for (let i = 0; i < grade.length; i++){
      obj = grade[i]
      total += obj.score
    }

    let avg = total / grade.length 
    if(avg >= 70){
      arr.push(student.name)
    }
  }
  return arr
}

// console.log(passingStudents(students))



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;
