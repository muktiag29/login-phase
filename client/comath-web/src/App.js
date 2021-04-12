import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        {localStorage.access_token ? (
          <Redirect to="/home" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route
        path="/login"
        render={() => {
          return localStorage.access_token ? <Redirect to="/home" /> : <Login />
        }}
      />
      <Route
        path="/home"
        render={() => {
          return localStorage.access_token ? <Home /> : <Redirect to="/login" />
        }}
      />
    </Switch>
  )
}
