function playConnectValidate(board, movement) {
  const move = movement.position
  
  if (movement.hFlag) {
    for (let i = 0; i < move.length; i++) {
      if(!i) {
        if(board[move[i][0]][move[i][1] + 1] === " ") {
          return false
        }
      } else if (i === move.length - 1) {
        if(board[move[i][0]][move[i][1] - 1] === " ") {
          return false
        }
      } else {
        if(board[move[i][0]][move[i][1] - 1] === " " || board[move[i][0]][move[i][1] + 1] === " " ) {
          return false
        }
      }
    }
  }
  
  if (movement.vFlag) {
    for (let i = 0; i < move.length; i++) {
      if(!i) {
        if(board[move[i][0] + 1][move[i][1]] === " ") {
          return false
        }
      } else if (i === move.length - 1) {
        if(board[move[i][0] - 1][move[i][1]] === " ") {
          return false
        }
      } else {
        if(board[move[i][0] - 1][move[i][1]] === " " || board[move[i][0] - 1][move[i][1]] === " " ) {
          return false
        }
      }
    }
  }

  return true 
}
module.exports = playConnectValidate