import { ActionType } from '../types/actions'
import { combineReducers } from 'redux'
import { getSetter } from './common'

import vco1 from './vco1'
import vco2 from './vco2'
import vcoMixer from './vcoMixer'
import frequencyModulator from './frequencyModulator'
import highpass from './highpass'
import lowpass from './lowpass'

const volume = getSetter(ActionType.SET_VOLUME, 0)

const portamento = getSetter(ActionType.SET_PORTAMENTO, 0)

const masterTune = getSetter(ActionType.SET_MASTER_TUNE, 0)

export default combineReducers({
  volume,
  vco1,
  vco2,
  vcoMixer,
  portamento,
  masterTune,
  frequencyModulator,
  highpass,
  lowpass
})
