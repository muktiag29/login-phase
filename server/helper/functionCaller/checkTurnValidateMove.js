function checkTurnValidateMove(lastMove, newMove) {
  const result = []
  
  for (let i = 0; i < 2; i++) {
    for (const x in newMove[i]) {
      let isNew = true
    
      for (const y in lastMove[i]) {
        if(x === y) {
          isNew = false
        }
    
      }
    
      if (isNew) {
        result.push(newMove[i][x])
      }
    }
  }
  
  return result
}

module.exports = checkTurnValidateMove