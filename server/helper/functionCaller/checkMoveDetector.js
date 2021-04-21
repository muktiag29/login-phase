function checkMoveDetector(board) {
  const step = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]
  const horizontally = {}
  const vertically = {}
  let result = []
  let position = []
  let point = 0

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (board[i][j] !== " ") {
        result.push(board[i][j])
        position.push([i, j])
      } else if (board[i][j] === " " && board[i][j - 1] !== " ") {
        if (result.length > 1) {
          horizontally["H" + step[i] + (((j + 15 - result.length) % 15) + 1)] = { 
            tile: result,
            position,
            point
          }
        }
        
        result = []
        position = []
      }
    }
  }
  
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (board[j][i] !== " ") {
        result.push(board[j][i])
        position.push([i, j])
      } else if (j && board[j][i] === " " && board[j - 1][i] !== " ") {
        if (result.length > 1) {
          vertically["V" + step[i] + (((j + 15 - result.length) % 15) + 1)] = { 
            tile: result,
            position,
            point
          }
        } 

        result = []
        position = []
      }
    }
  }
  
  return [horizontally, vertically]
}

module.exports = checkMoveDetector