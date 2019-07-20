export const LOAD_POSTS = 'LOAD_POSTS'
export const DISMISS_POST = 'DISMISS_POST'

export function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    payload: {
      posts
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
