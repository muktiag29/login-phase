import axios from "axios"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { boardMove, tileMove, rackMove, turnMove, positionMove } from "./../store/actions/gameAction"

export default function Starter() {

  const history = useHistory()
  const dispatch = useDispatch()

  const createGame = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:4000/game/newGame",
        headers: {
          access_token: localStorage.access_token
        }
      })

      console.log(data.board, "CREATE")
      await dispatch(boardMove(data.board))
      await dispatch(tileMove(data.tile))
      await dispatch(turnMove(data.turn))
      await dispatch(positionMove(data.position))
      await randomizing(data._id, data.rack)

      await history.push(`/game/${data._id}`)
    } catch (err) {
      console.log(err)
    }
  }

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

  return (
    <>
      <button onClick={() => createGame()}>START</button>
    </>
  )
}