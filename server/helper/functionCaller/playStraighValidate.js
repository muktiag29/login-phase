function playStraighValidate (lastBoard, newBoard) {
  const result = []

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (lastBoard[i][j] !== newBoard[i][j]) {
        result.push([i, j])
      }
    }
  }

  let hFlag = true
  let vFlag = true

  for (let i = 1; i < result.length; i++) {
    if(result[i][0] !== result[i - 1][0]) {
      hFlag = false
      break
    }
  }

  for (let i = 1; i < result.length; i++) {
    if(result[i][1] !== result[i - 1][1]) {
      vFlag = false
      break
    }
  }

  if (hFlag || vFlag) {
    return {
      hFlag,
      vFlag,
      position: result
    }
  }

  return false
}

module.exports = playStraighValidate