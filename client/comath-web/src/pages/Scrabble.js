import Navbar from "./../component/Navbar"
import ScrabbleCard from "./../component/ScrabbleCard"
import { Container } from "react-bootstrap"
import ScrabbleRack from "../component/ScrabbleRack"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { boardMove, tileMove, cordinate, rackMove, turnMove, positionMove } from "./../store/actions/gameAction"
import axios from "axios"


export default function Scrabble() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { board, rack, turn, position } = useSelector((state) => state.gameReducer)

  const refreshGame = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:4000/game/getGame/" + id,
        headers: {
          access_token: localStorage.access_token
        }
      })

      await dispatch(boardMove(data.board))
      await dispatch(tileMove(data.tile))
      await dispatch(rackMove(data.rack))
      await dispatch(turnMove(data.turn))
      await dispatch(positionMove(data.position))
      await dispatch(cordinate({
        row: -1,
        col: -1,
        dir: false
      }))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    refreshGame()
  }, [])

  const randomizing = async (_id, rack) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:4000/game/randomTile",
        data: { _id, rack },
        headers: {
          access_token: localStorage.access_token
        }
      })

      await dispatch(rackMove(data))
    } catch (err) {
      console.log(err)
    }
  }

  const playButton = async (id, board) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:4000/play/validate/" + id,
        data: { board },
        headers: {
          access_token: localStorage.access_token
        }
      })

      console.log(data, "DATA RESULT AFTER PLAY")

      if (data.accepted) {
        const moveDetected = await axios({
          method: "post",
          url: "http://localhost:4000/play/moveDetector/" + id,
          data: { board },
          headers: {
            access_token: localStorage.access_token
          }
        })

        console.log(moveDetected.data, "MOVE DETECTED")

        for (let i = 0; i < data.playStraigh.position.length; i++) {
          position.push(data.playStraigh.position[i])
        }

        await randomizing(id, rack)

        const response = await axios({
          method: "post",
          url: "http://localhost:4000/play/nextTurn/" + id,
          data: { board, turn: turn + 1, position },
          headers: {
            access_token: localStorage.access_token
          }
        })

        // console.log(response)
        await refreshGame(id)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Container fluid >
        <Navbar />
        <div style={{ marginTop: "10vh" }}>
          {board.map((row, indexI) => {
            return (
              <div className="row justify-content-center" key={indexI}>
                {row.map((col, indexJ) => {
                  return (
                    <ScrabbleCard key={indexJ} row={indexI} col={indexJ} />
                  )
                })}
              </div>
            )
          })}
        </div>

        <div className="row justify-content-center" style={{ marginTop: "1vh" }} >
          {rack.map((element, index) => {
            return <ScrabbleRack key={index} tile={element} index={index} />
          })}
        </div>

        <div>
          <button onClick={() => playButton(id, board)}>Play</button>
        </div>

      </Container>
    </>
  )
}