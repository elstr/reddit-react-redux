import { SET_MOBILE } from './actions'

const initialState = {
  isMobile: false
}

export const navigation = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE:
      return {
        isMobile: true
      }
    default:
      return state
  }
}
