import { ActionType, Action } from '../types/actions'

export const getSetter = function<T>(targetActionType: ActionType, initial: T) {
  return (state = initial, action: Action) => {
    if (action.type === targetActionType) {
      // We assert that the payload will be of type T to the compiler.
      return (action.payload as unknown) as T
    }
    return state
  }
}
