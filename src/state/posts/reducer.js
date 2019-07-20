import { LOAD_POSTS, DISMISS_POST} from './actions'

const initialState = {
  list: {},
  showDetail: false
}

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        list: action.payload.posts
      }
    case DISMISS_POST:
      return state
    default:
      return state
  }
}
