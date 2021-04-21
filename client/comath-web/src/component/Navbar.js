import { Nav, Navbar, Button } from "react-bootstrap"
import { useHistory } from "react-router"

export default function NavigationBar() {
  const history = useHistory()

  const HomePage = () => {
    history.push("/home")
  }

  const SudokuPage = () => {
    history.push("/sudoku")
  }
  const ScrabblePage = () => {
    history.push("/start")
  }

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button onClick={HomePage} variant="primary"> Home </Button>
            <Button onClick={SudokuPage} variant="primary"> Sudoku </Button>
            <Button onClick={ScrabblePage} variant="primary"> Scrabble </Button>
          </Nav>
          <Button variant="outline-danger">Logout</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}