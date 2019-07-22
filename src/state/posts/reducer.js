import {
  LOAD_POSTS,
  READ_POST,
  DISMISS_POST,
  DISMISS_ALL,
  CLEAR_DETAIL
} from './actions'
import { setPostRead, patchPosts, dismissPost } from '../../utils/helpers'
const initialState = {
  list: {},
  selectedPostId: null,
  showDetail: false
}

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        list: action.payload.posts
      }
    case READ_POST:
      return {
        list: patchPosts(
          state.list,
          setPostRead(state.list[action.payload.postId])
        ),
        selectedPostId: action.payload.postId,
        showDetail: true
      }
    case DISMISS_POST:
      return {
        ...state,
        list: dismissPost(state.list, action.payload.postId)
      }
    case CLEAR_DETAIL:
      return {
        ...state,
        showDetail: false
      }
    case DISMISS_ALL:
      return initialState
    default:
      return state
  }
}
