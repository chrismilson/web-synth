import {
  ActionType,
  SetAudioContextAction,
  SetMasterGainAction
} from './types/actions'

export function setAudioContext(context: AudioContext): SetAudioContextAction {
  return {
    type: ActionType.SET_AUDIO_CONTEXT,
    payload: { context }
  }
}

export function setMasterGain(gain: number): SetMasterGainAction {
  return {
    type: ActionType.SET_MASTER_GAIN,
    payload: { gain }
  }
}
