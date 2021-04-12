import axios from "axios"
import { GoogleLogin } from "react-google-login"
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory()

  async function responseGoogle(res) {
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:4000/login",
        data: res.profileObj,
      })
      await localStorage.setItem("access_token", data.access_token)
      await history.push("/home", data)
    } catch (response) {
      console.log(response, "Error")
    }
  }

  return (
    <>
      <div className="row justify-content-center" style={{ marginTop: "40vh" }}>
        <button className="btn btn-outline-dark btn-login mb-3">
          <GoogleLogin
            clientId="84057386720-lbege5n7a03308lte2ebu8j0uvgu0nh2.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="btn-google"
            style={{ background: "transparent" }}
          />
        </button>
      </div>
    </>
  )
}
