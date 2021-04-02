import { ADDWEBINFO } from './constants'
import { initialState } from './initialState'

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDWEBINFO:
      return { ...state, ...payload }
    default:
      return state
  }
}
