export const DISMISS_POST = 'DISMISS_POST'
export function dismissPost(postId) {
  return {
    type: DISMISS_POST,
    payload: {
      postId: postId
    }
  }
}
