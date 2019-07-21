const formatPosts = posts =>
  posts.reduce((list, { data }) => {
    list[data.id] = list[data.id] === undefined && data
    return list
  }, {})

const patchPosts = (posts, post) => {
  const updatedList = Object.assign({}, posts)
  updatedList[post.id] = post
  return updatedList
}

const setPostRead = post => Object.assign({}, post, { visited: true })

const dismissPost = (posts, postId) => {
  const filteredList = Object.assign({}, posts)
  delete filteredList[postId]
  return filteredList
}

module.exports = {
  formatPosts,
  setPostRead,
  patchPosts,
  dismissPost
}
