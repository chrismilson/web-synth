import { createStore } from 'redux'
import reducer from './reducers'
import { RootState } from './types/state'

const store = createStore(reducer)

export const observeStore = function<T>(
  select: (state: RootState) => T,
  onChange: (newValue: T) => void
) {
  let currentState: T

  const handleChange = () => {
    const newState = select(store.getState())
    if (newState !== currentState) {
      currentState = newState
      onChange(currentState)
    }
  }

  const unsubscribe = store.subscribe(handleChange)
  handleChange()
  return unsubscribe
}

export default store
