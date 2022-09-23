// Lets roll the dice. given an array and a target. list all combinations that sums up to the target.

function rollDice(array, target){
    // let fullArr = []
    let arr = []
    for (let i = 0; i < array.length; i++){
        let first = array[i]
        for (let j = array.length - 1; j >= 0; j--){
            let sec = array[j]
            if(first + sec === target){
                arr.push([i,j])
            }
        }
    }
    return arr
}

function rollDice(array, target){
    let arr
}


console.log(rollDice([1,2,3,4,5], 6))
