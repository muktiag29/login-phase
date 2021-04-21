function playChainValidate(board, movement) {
  const move = movement.position

  if(movement.hFlag) {
    const i = move[0][0]

    for (let j = move[0][1]; j <= move[move.length - 1][1]; j++) {
      if(board[i - 1][j] !== " " || board[i + 1][j] !== " " ) {
        return true
      }
    }
  }
  
  if(movement.vFlag) {
    const i = move[0][1]
    
    for (let j = move[0][0]; j <= move[move.length - 1][0]; j++) {
      if(board[j][i - 1] !== " " || board[j][i + 1] !== " " ) {
        return true
      }
    }
  }

  return false
}

module.exports = playChainValidate