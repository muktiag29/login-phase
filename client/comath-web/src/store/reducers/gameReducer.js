const initialState = {
  cordinateMove: {
    row: -1,
    col: -1,
    dir: false
  },
  board: [],
  tile: [],
  rack: [],
  turn: 0,
  position: []
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CORDINATE/MOVE":
      return { ...state, cordinateMove: action.payload }
    case "BOARD/MOVE":
      return { ...state, board: action.payload }
    case "TILE/MOVE":
      return { ...state, tile: action.payload }
    case "RACK/MOVE":
      return { ...state, rack: action.payload }
    case "TURN/MOVE":
      return { ...state, turn: action.payload }
    case "POSITION/MOVE":
      return { ...state, position: action.payload }
    default:
      return state
  }
}

export default gameReducer