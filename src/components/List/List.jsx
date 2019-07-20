import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <p key={post.id}>{post.id}</p>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.list
})


export default connect(
  mapStateToProps,
  null
)(List)
