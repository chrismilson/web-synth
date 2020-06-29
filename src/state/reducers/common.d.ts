import { ActionType, Action } from '../types/actions'

/**
 * Returns a generic reducer that will update the value of a parameter on the
 * state object when presented with a certain action type.
 *
 * @param actionType The type of the setter action
 * @param initialState The initial state of the value
 */
declare function getSetter<T>(
  actionType: ActionType,
  initialState: T
): (state?: T, action: Action) => T
