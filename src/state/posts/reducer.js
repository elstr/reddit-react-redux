import { DISMISS_POST } from './actions'

const initialState = {
  list: [],
  showDetail: false
}

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case DISMISS_POST:
      return state
    default:
      return state
  }
}
