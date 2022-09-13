// fibinaci

// const fibs = (n) => {
//     if (n === 1 || n === 2) return 1
//     return fibs(n-1)+fibs(n-2)
// }

// console.log(fibs(7))
// console.log(fibs(13))

// exponential 

const fibs = (n,memo={})=> {
    if (n === 1 || n === 2) return 1
    if (memo[n]) return memo[n]
    memo[n] = fibs(n-1, memo) + fibs(n-2,memo)
    return memo[n]
}


console.log(fibs(90))

// lineiar time 