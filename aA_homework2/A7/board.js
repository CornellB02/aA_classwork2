const board1 = [['O','X','O'], ['O','O',''], ['X','','X']]

function isVertical(board){
    let count = {}
    for (let i = 0; i < board.length; i++){
        let row = board[i]
        for (let j = 0; j < row.length; j++){
            let vWin = row[i]
            console.log(vWin)
            if((count[vWin] === undefined)){
                count[vWin] = 1
            }else {
                count[vWin] += 1
            }
            if(count[vWin] >= 3){
                console.log(count)
                return true
            }
        }
        return false 
        }
        }
          

        // console.log(vWin)

            // console.log(count[vWin])

console.log(isVertical(board1))

