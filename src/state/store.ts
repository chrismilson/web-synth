import reducer from './reducers'
import { createStore } from 'redux'
import { setAudioContext, setMasterGain } from './actions'

const store = createStore(reducer)

store.dispatch(setAudioContext(new AudioContext()))
store.dispatch(setMasterGain(0))

export default store
