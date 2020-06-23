import { Action, ActionType } from '../types/actions'
import { combineReducers } from 'redux'
import { VCO2WaveShape } from '../types/state'

const waveShape = (state = VCO2WaveShape.SAWTOOTH, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VCO2_WAVE_SHAPE:
      return action.payload
    default:
      return state
  }
}

const pitch = (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VCO2_PITCH:
      return action.payload
    default:
      return state
  }
}

const scale = (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VCO2_SCALE:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({ waveShape, pitch, scale })
