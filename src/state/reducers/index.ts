import { Action, ActionType } from '../types/actions'
import { combineReducers } from 'redux'
import vco1 from './vco1'
import vco2 from './vco2'

const volume = (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VOLUME:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({ volume, vco1, vco2 })
