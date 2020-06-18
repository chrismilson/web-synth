import { ActionType, Action } from './types/actions'
import { combineReducers } from 'redux'

function audioContext(
  state: AudioContext = new AudioContext(),
  action: Action
): AudioContext {
  switch (action.type) {
    case ActionType.SET_AUDIO_CONTEXT:
      return action.payload.context
    default:
      return state
  }
}

function masterGain(state = 0, action: Action): number {
  switch (action.type) {
    case ActionType.SET_MASTER_GAIN:
      return action.payload.gain
    default:
      return state
  }
}

export default combineReducers({
  audioContext,
  masterGain
})
