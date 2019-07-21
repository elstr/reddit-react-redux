import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readPost, dismissPost, dismissAll } from '../../state/posts/actions'
import Card from '../Card'
import './style.css'

class List extends Component {
  handleRead = id => this.props.readPost(id)
  handleDismiss = id => this.props.dismissPost(id)
  handleDismissAll = () => this.props.dismissAll()
  render() {
    const { posts } = this.props
    return (
      <div className='list-container'>
        {Object.keys(posts).map(k => (
          <Card key={posts[k].id} post={posts[k]} handleRead={this.handleRead} handleDismiss={this.handleDismiss} />
        ))}
        <button className='list-container-button__dismiss-all' onClick={this.handleDismissAll}>
          Dismiss All
        </button>
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
  dismissAll: () => dispatch(dismissAll())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
