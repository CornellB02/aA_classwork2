// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/1_scope.js`

// var foo = 5;

// function bar() {
//   var foo = "Anthony";
//   foo + " is home";
//   return foo;
// }

// console.log(foo);   // What is foo on this line? 5
// console.log(bar()); // What is bar() on this line? Anthony
// console.log(foo);   // What is foo on this line? 5


function fibinici(length){
  if (length === 0) {
    return [];
  } else if (length === 1) {
    return [1]
  }

  arr = [1, 1]
  
while (arr.length < length) {
  let next = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(next)
}
return arr
}
//   for (i = 1; i <= length; i++) {
//     arr.push(i)
//   }
//   return arr
// }


console.log(fibinici(903))    