import { combineReducers } from 'redux'
import { ActionType } from '../types/actions'
import { getSetter } from './common'

const hold = getSetter(ActionType.SET_ENVELOPE_GENERATOR_2_HOLD, 0)

const attack = getSetter(ActionType.SET_ENVELOPE_GENERATOR_2_ATTACK, 0)

const decay = getSetter(ActionType.SET_ENVELOPE_GENERATOR_2_DECAY, 0)

const sustain = getSetter(ActionType.SET_ENVELOPE_GENERATOR_2_SUSTAIN, 1)

const release = getSetter(ActionType.SET_ENVELOPE_GENERATOR_2_RELEASE, 0)

export default combineReducers({
  hold,
  attack,
  decay,
  sustain,
  release
})
