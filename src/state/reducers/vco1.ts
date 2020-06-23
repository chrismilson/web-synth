import { Action, ActionType } from '../types/actions'
import { combineReducers } from 'redux'
import { VCO1WaveShape } from '../types/state'

const waveShape = (state = VCO1WaveShape.SAWTOOTH, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VCO1_WAVE_SHAPE:
      return action.payload
    default:
      return state
  }
}

const pulseWidth = (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VCO1_PULSE_WIDTH:
      return action.payload
    default:
      return state
  }
}

const scale = (state = 1, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VCO1_SCALE:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({ waveShape, pulseWidth, scale })
