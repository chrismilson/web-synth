import { combineReducers } from 'redux'
import { ActionType } from '../types/actions'
import { getSetter } from './common'

const vco1Level = getSetter(ActionType.SET_VCO1_LEVEL, 1)

const vco2Level = getSetter(ActionType.SET_VCO2_LEVEL, 0.5)

export default combineReducers({
  vco1Level,
  vco2Level
})
