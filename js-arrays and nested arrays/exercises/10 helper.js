function TicTacToe(turns){
    let size = 3;
    let board = [];
    for (let i=0; i<3; i++){
        board.push('false '.repeat(size).trim().split(' '))
    }

    let marks = {
        1: 'X',
        2: 'O'
    }

    function check(board){
        let winner = []
        for (let player in marks){
            for (let i=0; i<board.length; i++){
                /// check rows
                if (board[i].every(ele => ele == marks[player])){
                    winner = [player, marks[player]]
                }
                /// check columns
                let column = [board[0][i], board[1][i], board[2][i]]
                if (column.every(ele => ele == marks[player])){
                    winner = [player, marks[player]]
                }
            }
            /// check diagonals
            let firstDig = [board[0][0], board[1][1], board[2][2]]
            let secondDig = [board[0][2], board[1][1], board[2][0]]
            if (firstDig.every(ele => ele == marks[player])){
                winner = [player, marks[player]]
            }
            if (secondDig.every(ele => ele == marks[player])){
                winner = [player, marks[player]]
            }
        }
        return winner
    }

    let turn = 0
    let mark = ''
    function play(turns, board){
        while (turns.length){
            if (turn%2==0){
                mark = marks[1]
            } else {
                mark = marks[2]
            }
            let move =turns.shift().split(' ').map(x => Number(x))
            if (board[move[0]][move[1]] == 'false'){
                board[move[0]][move[1]] = mark
            } else {
                console.log("This place is already taken. Please choose another!")
                continue
            }

            let winner = check(board)
            if (winner[1] == 'X' || winner[1] == 'O') {
                return `Player ${winner[1]} wins!`
            }

            let count = 0
            for (let row of board){
                for (let ele of row){
                    if (ele == 'false'){
                        count +=1
                    }
                }
            }
            if (count==0){
                return "The game ended! Nobody wins :("
            }

            turn +=1
        }
    }
    console.log(play(turns, board))
    for (let row of board){
        console.log(row.join('\t'))
    }
}

TicTacToe(
    ["0 1",
    "0 0",
    "0 2", 
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"])