export const cordinate = (move) => {
  return {
    type: "CORDINATE/MOVE",
    payload: {
      row: move.row,
      col: move.col,
      dir: move.dir
    }
  }
}

export const boardMove = (board) => {
  return {
    type: "BOARD/MOVE",
    payload: board
  }
}

export const tileMove = (tile) => {
  return {
    type: "TILE/MOVE",
    payload: tile
  }
}

export const rackMove = (rack) => {
  return {
    type: "RACK/MOVE",
    payload: rack
  }
}

export const turnMove = (turn) => {
  return {
    type: "TURN/MOVE",
    payload: turn
  }
}

export const positionMove = (position) => {
  return {
    type: "POSITION/MOVE",
    payload: position
  }
}