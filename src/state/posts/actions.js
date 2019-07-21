export const LOAD_POSTS = 'LOAD_POSTS'
export const READ_POST = 'READ_POST'
export const DISMISS_POST = 'DISMISS_POST'
export const DISMISS_ALL = 'DISMISS_ALL'

export function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    payload: {
      posts
    }
  }
}
export function readPost(id) {
  return {
    type: READ_POST,
    payload: {
      postId: id
    }
  }
}
export function dismissPost(postId) {
  return {
    type: DISMISS_POST,
    payload: {
      postId: postId
    }
  }
}
export function dismissAll() {
  return {
    type: DISMISS_ALL,
  }
}
