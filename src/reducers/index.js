import { combineReducers } from 'redux'
import BeersReducer from './reducer_beers'

const rootReducer = combineReducers({
  beers: BeersReducer
})

export default rootReducer