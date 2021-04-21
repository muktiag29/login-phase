import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Sudoku from './pages/Sudoku'
import Scrabble from './pages/Scrabble';
import Starter from './pages/Starter';

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
      <Route
        path="/profile"
        render={() => {
          return localStorage.access_token ? <Profile /> : <Redirect to="/login" />
        }}
      />
      <Route
        path="/sudoku"
        render={() => {
          return localStorage.access_token ? <Sudoku /> : <Redirect to="/login" />
        }}
      />
      <Route
        path="/start"
        render={() => {
          return localStorage.access_token ? <Starter /> : <Redirect to="/login" />
        }}
      />
      <Route
        path="/game/:id"
        render={() => {
          return localStorage.access_token ? <Scrabble /> : <Redirect to="/login" />
        }}
      />
    </Switch>
  )
}
