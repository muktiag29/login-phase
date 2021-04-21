function checkMoveValidate(){
  const step = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]
  const horizontally = {}
  const vertically = {}
  let tile = []
  let position = []

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (board[i][j] !== " ") {
        tile.push(board[i][j])
        position.push([i, j])
      } else if (board[i][j] === " " && board[i][j - 1] !== " ") {
        if (tile.length > 1) {
          horizontally["H" + step[i] + (((j + 15 - tile.length) % 15) + 1)] = { 
            tile,
            position
          }
        }
        
        tile = []
        position = []
      }
    }
  }
  
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (board[j][i] !== " ") {
        tile.push(board[j][i])
        position.push([i, j])
      } else if (j && board[j][i] === " " && board[j - 1][i] !== " ") {
        if (tile.length > 1) {
          vertically["V" + step[i] + (((j + 15 - tile.length) % 15) + 1)] = { 
            tile,
            position
          }
        } 

        tile = []
        position = []
      }
    }
  }
  
  return [horizontally, vertically]
}
  
  // console.log(movingput(boardOldest))
  // console.log(movingput(boardLatest))
  
  // const oldest = movingput(boardOldest)
  // const latest = movingput(boardLatest)
  
  // const movingNew = {}
  
  // for (let i = 0; i < 2; i++) {
  //   for (const x in latest[i]) {
  //     let isNew = true
    
  //     for (const y in oldest[i]) {
  //       if(x === y) {
  //         isNew = false
  //       }
    
  //     }
    
  //     if (isNew) {
  //       movingNew[x] = latest[i][x]
  //     }
  //   }
  // }
  
  // console.log(movingNew)

module.exports = checkMoveValidate