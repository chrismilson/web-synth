import { RootState } from '../../state/types/state'

export type Selectors<T> = {
  [P in keyof T]: (state: RootState) => T[P]
}

export class ParamaterError extends Error {
  constructor() {
    super('Incorrect parameters on custom processor')
  }
}
