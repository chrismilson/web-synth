import { getSetter } from './common'
import { ActionType } from '../types/actions'
import { combineReducers } from 'redux'

const waveForm = getSetter(ActionType.SET_MODULATION_GENERATOR_WAVE_FORM, 0.5)

const frequency = getSetter(ActionType.SET_MODULATION_GENERATOR_FREQUENCY, 5)

export default combineReducers({
  waveForm,
  frequency
})
