const formatPosts = posts =>
  posts.reduce((list, { data }) => {
    list[data.id] = list[data.id] === undefined && data
    return list
  }, {})


module.exports = {
    formatPosts
}