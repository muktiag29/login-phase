import Navbar from "./../component/Navbar"
import { Button, Container } from "react-bootstrap"
import { useHistory } from "react-router"

export default function Home() {
  const history = useHistory()

  const ProfilePage = () => {
    history.push("/profile")
  }

  return (
    <>
      <Container fluid>
        <Navbar />
        {/* <div className="mt-3">
          INI HOME PAGE
        </div> */}
        <div className="row">
          <div className="col-3" style={{ height: "50vh", backgroundColor: "" }}>
            <div className="row justify-content-center">
              <div className="col mb-3" style={{ height: "20vh", marginTop: "10vh" }}>
                <div className="row justify-content-center">
                  <img alt="profile" src="https://asset.kompas.com/crops/luH9fJyhqfV_PyoTjC_G9IQHAp8=/0x0:1000x667/750x500/data/photo/2017/05/27/1923430016.jpg" style={{ border: "black solid 3px", height: "10vh", width: "10vh", borderRadius: "100%" }}></img>
                </div>
                <div className="row justify-content-center">
                  <div className="h3 mx-3">MOCHI Al BANTANI</div>
                  <div>
                    <Button onClick={ProfilePage}><i className="fa fa-pencil"></i></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6" style={{ height: "100vh", backgroundColor: "orange", overflowY: "scroll" }}></div>
          <div className="col-3" style={{ height: "50vh", backgroundColor: "blue" }}> </div>
        </div>
      </Container>
    </>
  )
}