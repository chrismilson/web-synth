import { createStore, Store } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import { RootState } from './types/state'

const reducer = persistReducer(
  {
    key: 'web-synth',
    storage,
    blacklist: ['volume', 'keyboard']
  },
  rootReducer
)

export const store = createStore(reducer)

export const persistor = persistStore((store as unknown) as Store)

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
