function ticTacToe(moves) {
    const playerOneMark = 'X';
    const playerTwoMark = 'O';
    let board = [];
    for (let i=0; i<3; i++){
        board.push('false '.repeat(3).trim().split(' '))
    }
    for (let i = 0; i < moves.length; i++){
        let [x, y] = moves[i].split(' ');
        if (i % 2 == 0){
            board[x][y] = playerOneMark;
        } else {
            board[x][y] = playerTwoMark;
        }
        
    }
    console.log(board)



}

console.log(ticTacToe(
    ["0 1",
    "0 0",
    "0 2", 
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
))
// console.log(ticTacToe(
//     ["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]
// ))
// console.log(ticTacToe(
//     ["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]
// ))