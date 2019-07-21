import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readPost, dismissPost } from '../../state/posts/actions'
import Card from '../Card'
import "./style.css"

class List extends Component {
  handleRead = id => this.props.readPost(id)
  handleDismiss = id => this.props.dismissPost(id)
  render() {
    const { posts } = this.props
    return (
      <div className="list-container">
        {Object.keys(posts).map(k => (
          <Card key={posts[k].id} post={posts[k]} handleRead={this.handleRead} handleDismiss={this.handleDismiss} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.list
})

const mapDispatchToProps = dispatch => ({
  readPost: postId => dispatch(readPost(postId)),
  dismissPost: postId => dispatch(dismissPost(postId)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
