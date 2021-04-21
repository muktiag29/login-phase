import { createStore, combineReducers, applyMiddleware } from 'redux'
import gameReducer from './reducers/gameReducer'
import thunk from 'redux-thunk'

const store = createStore(combineReducers({
  gameReducer,
}), applyMiddleware(thunk))

export default store