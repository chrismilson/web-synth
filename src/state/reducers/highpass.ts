import { combineReducers } from 'redux'
import { ActionType } from '../types/actions'
import { getSetter } from './common'

const cutoff = getSetter(ActionType.SET_HIGHPASS_CUTOFF, 1)

const peak = getSetter(ActionType.SET_HIGHPASS_PEAK, 0)

export default combineReducers({
  cutoff,
  peak
})
