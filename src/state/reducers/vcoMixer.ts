import { combineReducers } from 'redux'
import { Action, ActionType } from '../types/actions'

const vco1Level = (state = 1, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VCO1_LEVEL:
      return action.payload
    default:
      return state
  }
}

const vco2Level = (state = 0.5, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VCO2_LEVEL:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  vco1Level,
  vco2Level
})
