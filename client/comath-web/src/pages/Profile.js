import Navbar from "./../component/Navbar"
import { Form, Button } from "react-bootstrap"

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="row justify-content-center" style={{ marginTop: "10vh" }}>
        <div className="col-6">
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Nick Name" disabled value="Mochi Ramdan Al =B" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Nick Name" disabled value="mochi@gmail.com" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Nick Name</Form.Label>
              <Form.Control type="text" placeholder="Nick Name" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}