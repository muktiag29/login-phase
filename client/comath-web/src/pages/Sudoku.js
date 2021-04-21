import SudokuBox from "../component/SudokuBox"
import { Container, Button } from "react-bootstrap"
import Navbar from "./../component/Navbar";

export default function Sudoku() {
  const board = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ]

  return (
    <>
      <Container fluid >
        <Navbar />
        <div style={{ marginTop: "10vh" }}>
          {board.map((row, indexI) => {
            return (
              <div className="row justify-content-center" >
                {row.map((col) => {
                  return (
                    <SudokuBox row={indexI + 1} col={col} />
                  )
                })}
              </div>
            )
          })}
        </div>

        <div className="row justify-content-center" style={{ marginTop: "5vh" }} >
          <Button> Submit </Button>
        </div>
      </Container>
    </>
  )
}