import { boardMove, cordinate } from "./../store/actions/gameAction"
import { useDispatch, useSelector } from "react-redux";

export default function SudokuBox({ row, col }) {
  const dispatch = useDispatch()
  const { cordinateMove, board, rack, position } = useSelector((state) => state.gameReducer)

  const ButtonClick = async (row, col) => {
    if (board[row][col] !== "") {

      if (board[row][col].includes("?")) {
        rack.push("?")
      } else if (board[row][col].includes("PM")) {
        rack.push("PM")
      } else if (board[row][col].includes("PT")) {
        rack.push("PT")
      } else if (board[row][col].includes("PD")) {
        rack.push("PD")
      } else if (board[row][col].includes("MT")) {
        rack.push("MT")
      } else if (board[row][col].includes("MD")) {
        rack.push("MD")
      } else if (board[row][col].includes("TD")) {
        rack.push("TD")
      } else {
        rack.push(board[row][col])
      }

      board[row][col] = ""

      await dispatch(boardMove(board))
    } else {
      if (row === cordinateMove.row && col === cordinateMove.col) {
        if (cordinateMove.dir === "horizontal") {
          dispatch(cordinate({
            row,
            col,
            dir: "vertical"
          }))
        } else if (cordinateMove.dir === "vertical") {
          dispatch(cordinate({
            row: -1,
            col: -1,
            dir: false
          }))
        }
      } else {
        dispatch(cordinate({
          row,
          col,
          dir: "horizontal"
        }))
      }
    }
  }

  return (
    <>
      { position.find((el) => el[0] === row && el[1] === col) ? (
        <div className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "darkgreen" }}>
          {/* <i className="fas fa-star" aria-hidden="true" style={{ fontSize: "5vh", color: "orange" }}></i> */}
          {board[row][col]}
        </div>
      ) : (
        (row === 7 && col === 7) ? (
          cordinateMove.row === row && cordinateMove.col === col ? (
            cordinateMove.dir === "horizontal" ? (
              <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "darkgreen" }}>
                <i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                {/* {board[row][col]} */}
              </button>
            ) : (
              <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "darkgreen" }}>
                <i className="fa fa-arrow-down" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                {/* {board[row][col]} */}
              </button>
            )
          ) : (
            <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "darkgreen" }}>
              {/* <i className="fa fa-star" aria-hidden="true" style={{ fontSize: "5vh", color: "orange" }}></i> */}
              {board[row][col]}
            </button>
          )
        ) : (
          (row === 0 && col === 4) ||
            (row === 0 && col === 10) ||
            (row === 2 && col === 6) ||
            (row === 2 && col === 8) ||
            (row === 4 && col === 0) ||
            (row === 4 && col === 14) ||
            (row === 5 && col === 5) ||
            (row === 5 && col === 9) ||
            (row === 6 && col === 2) ||
            (row === 6 && col === 6) ||
            (row === 6 && col === 8) ||
            (row === 6 && col === 12) ||
            (row === 8 && col === 2) ||
            (row === 8 && col === 6) ||
            (row === 8 && col === 8) ||
            (row === 8 && col === 12) ||
            (row === 9 && col === 5) ||
            (row === 9 && col === 9) ||
            (row === 10 && col === 0) ||
            (row === 10 && col === 14) ||
            (row === 12 && col === 6) ||
            (row === 12 && col === 8) ||
            (row === 14 && col === 4) ||
            (row === 14 && col === 10) ? (
            cordinateMove.row === row && cordinateMove.col === col ? (
              cordinateMove.dir === "horizontal" ? (
                <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "lightblue" }}>
                  <i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                  {/* {board[row][col]} */}
                </button>
              ) : (
                <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "lightblue" }}>
                  <i className="fa fa-arrow-down" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                  {/* {board[row][col]} */}
                </button>
              )
            ) : (
              <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "lightblue" }}>
                {/* <i className="fa fa-star" aria-hidden="true" style={{ fontSize: "5vh", color: "orange" }}></i> */}
                {board[row][col]}
              </button>
            )
          ) : (
            (row === 1 && col === 5) ||
              (row === 1 && col === 9) ||
              (row === 3 && col === 3) ||
              (row === 3 && col === 7) ||
              (row === 3 && col === 11) ||
              (row === 4 && col === 4) ||
              (row === 4 && col === 10) ||
              (row === 5 && col === 1) ||
              (row === 5 && col === 13) ||
              (row === 7 && col === 3) ||
              (row === 7 && col === 11) ||
              (row === 9 && col === 1) ||
              (row === 9 && col === 13) ||
              (row === 10 && col === 4) ||
              (row === 10 && col === 10) ||
              (row === 11 && col === 3) ||
              (row === 11 && col === 7) ||
              (row === 11 && col === 11) ||
              (row === 13 && col === 5) ||
              (row === 13 && col === 9) ? (
              cordinateMove.row === row && cordinateMove.col === col ? (
                cordinateMove.dir === "horizontal" ? (
                  <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "darkblue" }}>
                    <i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                    {/* {board[row][col]} */}
                  </button>
                ) : (
                  <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "darkblue" }}>
                    <i className="fa fa-arrow-down" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                    {/* {board[row][col]} */}
                  </button>
                )
              ) : (
                <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "darkblue" }}>
                  {/* <i className="fa fa-star" aria-hidden="true" style={{ fontSize: "5vh", color: "orange" }}></i> */}
                  {board[row][col]}
                </button>
              )
            ) : (
              (row === 1 && col === 1) ||
                (row === 1 && col === 13) ||
                (row === 2 && col === 2) ||
                (row === 2 && col === 12) ||
                (row === 12 && col === 2) ||
                (row === 12 && col === 12) ||
                (row === 13 && col === 1) ||
                (row === 13 && col === 13) ? (
                cordinateMove.row === row && cordinateMove.col === col ? (
                  cordinateMove.dir === "horizontal" ? (
                    <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "pink" }}>
                      <i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                      {/* {board[row][col]} */}
                    </button>
                  ) : (
                    <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "pink" }}>
                      <i className="fa fa-arrow-down" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                      {/* {board[row][col]} */}
                    </button>
                  )
                ) : (
                  <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "pink" }}>
                    {/* <i className="fa fa-star" aria-hidden="true" style={{ fontSize: "5vh", color: "orange" }}></i> */}
                    {board[row][col]}
                  </button>
                )
              ) : (
                (row === 0 && col === 0) ||
                  (row === 0 && col === 14) ||
                  (row === 14 && col === 0) ||
                  (row === 14 && col === 14) ? (
                  cordinateMove.row === row && cordinateMove.col === col ? (
                    cordinateMove.dir === "horizontal" ? (
                      <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "orange" }}>
                        <i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                        {/* {board[row][col]} */}
                      </button>
                    ) : (
                      <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "orange" }}>
                        <i className="fa fa-arrow-down" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                        {/* {board[row][col]} */}
                      </button>
                    )
                  ) : (
                    <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "orange" }}>
                      {/* <i className="fa fa-star" aria-hidden="true" style={{ fontSize: "5vh", color: "orange" }}></i> */}
                      {board[row][col]}
                    </button>
                  )
                ) : (
                  cordinateMove.row === row && cordinateMove.col === col ? (
                    cordinateMove.dir === "horizontal" ? (
                      <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "darkgreen" }}>
                        <i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                        {/* {board[row][col]} */}
                      </button>
                    ) : (
                      <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "darkgreen" }}>
                        <i className="fa fa-arrow-down" aria-hidden="true" style={{ fontSize: "5vh", color: "red" }}></i>
                        {/* {board[row][col]} */}
                      </button>
                    )
                  ) : (
                    <button onClick={() => ButtonClick(row, col)} className="p-0 m-0" style={{ width: "5vh", height: "5vh", backgroundColor: "darkgreen" }}>
                      {/* <i className="fa fa-star" aria-hidden="true" style={{ fontSize: "5vh", color: "orange" }}></i> */}
                      {board[row][col]}
                    </button>
                  )
                )
              )
            )
          )
        )
      )}
    </>
  )
}