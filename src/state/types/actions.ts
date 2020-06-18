export enum ActionType {
  SET_AUDIO_CONTEXT = 'SET_AUDIO_CONTEXT',
  SET_MASTER_GAIN = 'SET_MASTER_GAIN'
}

export interface SetAudioContextAction {
  type: ActionType.SET_AUDIO_CONTEXT
  payload: {
    /** An audio context object */
    context: AudioContext
  }
}

export interface SetMasterGainAction {
  type: ActionType.SET_MASTER_GAIN
  payload: {
    /** The new gain level */
    gain: number
  }
}

export type Action = SetAudioContextAction | SetMasterGainAction
