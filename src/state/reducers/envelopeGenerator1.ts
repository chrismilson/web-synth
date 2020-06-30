import { combineReducers } from 'redux'
import { getSetter } from './common'
import { ActionType } from '../types/actions'

const delay = getSetter(ActionType.SET_ENVELOPE_GENERATOR_1_DELAY, 0)

const attack = getSetter(ActionType.SET_ENVELOPE_GENERATOR_1_ATTACK, 0)

const release = getSetter(ActionType.SET_ENVELOPE_GENERATOR_1_RELEASE, 0)

export default combineReducers({
  delay,
  attack,
  release
})
