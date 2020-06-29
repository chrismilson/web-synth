import { combineReducers } from 'redux'
import { Action, ActionType } from '../types/actions'

const modulationGenerator = (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.SET_FREQUENCY_MODULATOR_MODULATION_GENERATOR:
      return action.payload
    default:
      return state
  }
}

const envelopeGenerator = (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.SET_FREQUENCY_MODULATOR_ENVELOPE_GENERATOR:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  modulationGenerator,
  envelopeGenerator
})
