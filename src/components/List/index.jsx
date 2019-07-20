import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    const { posts } = this.props
    return <div>{Object.keys(posts).map(k => console.log(posts[k]))}</div>
  }
}

const mapStateToProps = state => ({
  posts: state.posts.list
})

export default connect(
  mapStateToProps,
  null
)(List)
