import { combineReducers } from 'redux'
import { ActionType } from '../types/actions'
import { getSetter } from './common'

const cutoff = getSetter(ActionType.SET_HIGHPASS_CUTOFF, 0)

const peak = getSetter(ActionType.SET_HIGHPASS_PEAK, 0)

const modulationGenerator = getSetter(
  ActionType.SET_HIGHPASS_MODULATOR_MODULATION_GENERATOR,
  0
)

const envelopeGenerator = getSetter(
  ActionType.SET_HIGHPASS_MODULATOR_ENVELOPE_GENERATOR,
  0
)

const modulator = combineReducers({
  modulationGenerator,
  envelopeGenerator
})

export default combineReducers({
  cutoff,
  peak,
  modulator
})
