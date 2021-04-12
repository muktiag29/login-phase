import React, { useState, useEffect } from 'react';
import axios from "axios"
import { GoogleLogin } from "react-google-login"
import { UseHistory } from 'react-router-dom';

const login = () => {
  const [isOnline, setIsOnline] = useState(null);

  async function responseGoogle(res) {
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:4000/login",
        data: res.profileObj,
      })
      await localStorage.setItem("access_token", data.access_token)
      // await history.push("/home", data)
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

export default login