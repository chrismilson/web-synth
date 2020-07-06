import { ActionType, Action } from '../types/actions'
import { KeyboardState } from '../types/state'

const defaultKeyboardState: KeyboardState = {
  octaves: 3,
  keys: [...Array(37)].fill(false),
  bassNote: 60
}

const keyboardReducer = (state = defaultKeyboardState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_KEYBOARD_OCTAVES:
      return {
        ...state,
        octaves: action.payload,
        keys: [...Array(action.payload * 12 + 1)].fill(false)
      }
    case ActionType.SET_KEY_DOWN:
    case ActionType.SET_KEY_UP:
      const target = action.type === ActionType.SET_KEY_DOWN
      const idx = action.payload - state.bassNote
      if (state.keys[idx] !== target) {
        const keys = [...state.keys]
        keys[idx] = target
        return { ...state, keys }
      }
      return state
    case ActionType.SET_KEYBOARD_BASS_NOTE:
      return {
        ...state,
        bassNote: action.payload
      }
    default:
      return state
  }
}

export default keyboardReducer
