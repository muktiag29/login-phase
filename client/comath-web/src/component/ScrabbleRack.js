import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { boardMove, rackMove, cordinate } from "../store/actions/gameAction"
import { Modal, Button } from "react-bootstrap"

export default function ScrabbleRack({ tile, index }) {
  const dispatch = useDispatch()
  const { cordinateMove, board, rack } = useSelector((state) => state.gameReducer)
  const [show, setShow] = useState(false)
  const [choosing, setChoosing] = useState([])

  const handleClose = () => {
    setShow(false)
  }
  const handleShow = (payload) => {
    setShow(true)
    setChoosing(payload)
  }

  const MovePutting = async (value) => {
    if (cordinateMove.row !== -1 || cordinateMove.col !== -1) {

      if (value === "?") {
        return handleShow(["0?", "1?", "2?", "3?", "4?", "5?", "6?", "7?", "9?", "+?", "-?", "*?", "/?", "=?"])
      }

      if (value === "PM") {
        return handleShow(["+PM", "-PM",])
      }

      if (value === "PT") {
        return handleShow(["+PT", "*PT"])
      }

      if (value === "PD") {
        return handleShow(["+PD", "/PD"])
      }

      if (value === "MT") {
        return handleShow(["-MT", "*MT"])
      }

      if (value === "MD") {
        return handleShow(["-MD", "/MD"])
      }

      if (value === "TD") {
        return handleShow(["*TD", "/TD"])
      }

      if (value) {
        board[cordinateMove.row][cordinateMove.col] = value
        rack.splice(index, 1)
        dispatch(boardMove(board))
        dispatch(rackMove(rack))
      }

      if (cordinateMove.dir === "horizontal") {
        await dispatch(cordinate({
          row: cordinateMove.row,
          col: (cordinateMove.col + 1) % 15,
          dir: "horizontal"
        }))
        let n = 0

        do {
          await dispatch(cordinate({
            row: cordinateMove.row,
            col: (cordinateMove.col + n + 1) % 15,
            dir: "horizontal"
          }))

          n++
        } while (board[cordinateMove.row][(cordinateMove.col + n) % 15] !== "" && n < 14)

        if (cordinateMove.col + n - 1 === 14) {
          await dispatch(cordinate({
            row: -1,
            col: -1,
            dir: false
          }))
        }

        if (n === 14) {
          await dispatch(cordinate({
            row: -1,
            col: -1,
            dir: false
          }))
        }

      } else if (cordinateMove.dir === "vertical") {
        dispatch(cordinate({
          row: (cordinateMove.row + 1) % 15,
          col: cordinateMove.col,
          dir: "vertical"
        }))

        let n = 0

        do {
          await dispatch(cordinate({
            row: (cordinateMove.row + n + 1) % 15,
            col: cordinateMove.col,
            dir: "vertical"
          }))

          n++
          // }
        } while (board[(cordinateMove.row + n) % 15][cordinateMove.col] !== "")

        if (cordinateMove.row + n - 1 === 14) {
          await dispatch(cordinate({
            row: -1,
            col: -1,
            dir: false
          }))
        }

        if (n === 14) {
          await dispatch(cordinate({
            row: -1,
            col: -1,
            dir: false
          }))
        }
      }
    }

    setShow(false)
  }

  return (
    <>
      <div className="row justify-content-center m-3" >
        <button onClick={() => MovePutting(tile)} style={{ width: "6vh", height: "6vh" }}>{tile}</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose One</Modal.Title>
        </Modal.Header>
        <div className="m-3" style={{ textAlign: "center", }}>
          <Modal.Body >
            {choosing.map((element, index) => {
              return (
                <button onClick={() => MovePutting(element)} style={{ width: "6vh", height: "6vh" }} key={index}>{element}</button>
              )
            })}
          </Modal.Body>
        </div>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}