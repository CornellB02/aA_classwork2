/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/


// function catBuilder(name, color, toys) {
//     let cat = {}
//     cat.name = name;
//     cat['color'] = color;
//     cat['toys'] = toys;

//     return cat

// }

// let cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);

// let cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);

// console.log(cat2)

// console.log(cat1)


let sable = personBuild('female', 'Black', ['working']);

function personBuild(gender, race, current) {
    let person = {}
    person.gender = gender;
    person.race = race;
    person['current'] = current;

    return person

}


console.log(sable)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = catBuilder;
