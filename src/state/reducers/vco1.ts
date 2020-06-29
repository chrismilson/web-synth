import { ActionType } from '../types/actions'
import { combineReducers } from 'redux'
import { VCO1WaveShape } from '../types/state'
import { getSetter } from './common'

const waveShape = getSetter(
  ActionType.SET_VCO1_WAVE_SHAPE,
  VCO1WaveShape.SAWTOOTH
)

const pulseWidth = getSetter(ActionType.SET_VCO1_PULSE_WIDTH, 1.49 / 2)

const scale = getSetter(ActionType.SET_VCO1_SCALE, 1)

export default combineReducers({ waveShape, pulseWidth, scale })
