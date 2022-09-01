/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {

  let sen = sentence.split(' ')
  for (let i = 0; i <= sen.length; i++) {
    if (sen[i] === "I") {
      sen[i] = "we"
    } else if (sen[i] === "mine") {
      sen[i] = "ours"
    } else if (sen[i] === "my") {
      sen[i] = "our"
    } else if (sen[i] === "me") {
      sen[i] = "our"
    }
  }
    return sen.join(' ')
}

console.log(royalWe("I want to go to the store"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = royalWe;

//   let str = " "
//   let sen = sentence[i]
//   for (let i = 0; i <= sen; i++){
//     if (i = 'i') += str
//   }
// return str


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;

