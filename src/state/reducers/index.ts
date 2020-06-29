import { Action, ActionType } from '../types/actions'
import { combineReducers } from 'redux'
import vco1 from './vco1'
import vco2 from './vco2'
import vcoMixer from './vcoMixer'
import frequencyModulator from './frequencyModulator'

const volume = (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VOLUME:
      return action.payload
    default:
      return state
  }
}

const portamento = (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.SET_PORTAMENTO:
      return action.payload
    default:
      return state
  }
}

const masterTune = (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.SET_MASTER_TUNE:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  volume,
  vco1,
  vco2,
  vcoMixer,
  portamento,
  masterTune,
  frequencyModulator
})
