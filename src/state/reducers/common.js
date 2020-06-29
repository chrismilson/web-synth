/**
 * Returns a generic reducer that will update the value of a parameter on the
 * state object when presented with a certain action type.
 *
 * @param actionType The type of the setter action
 * @param initialState The initial state of the value
 */
export const getSetter = (actionType, initialState) => (
  state = initialState,
  action
) => {
  if (action.type === actionType) {
    return action.payload
  }
  return state
}
