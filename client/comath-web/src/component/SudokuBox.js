import { Card, Form } from "react-bootstrap"

export default function SudokuBox({ row, col }) {
  return (
    <>
      {col ? (
        <Card style={{ width: "7vh", height: "7vh", display: "flex", textAlign: "center", justifyContent: "center", fontSize: "5vh", fontWeight: "bolder", color: "darkcyan" }}>
          {row}
        </Card>
      ) : (
        <div style={{ width: "7vh", height: "7vh" }}>
          <Form style={{ width: "7vh" }}>
            <Form.Group>
              <Form.Control type="number" min="1" max="9" step="1" maxLength="1" style={{ backgroundColor: "transparent", width: "7vh", height: "7vh", fontSize: "5vh" }} />
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  )
}