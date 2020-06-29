import { ActionType } from '../types/actions'
import { combineReducers } from 'redux'
import { VCO2WaveShape } from '../types/state'
import { getSetter } from './common'

const waveShape = getSetter(
  ActionType.SET_VCO2_WAVE_SHAPE,
  VCO2WaveShape.SAWTOOTH
)

const pitch = getSetter(ActionType.SET_VCO2_PITCH, 0)

const scale = getSetter(ActionType.SET_VCO2_SCALE, 0)

export default combineReducers({ waveShape, pitch, scale })
