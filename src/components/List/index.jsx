import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readPost, dismissPost, dismissAll } from '../../state/posts/actions'
import Card from '../Card'
import './style.css'

class List extends Component {
  handleRead = id => this.props.readPost(id)
  handleDismiss = id => {
    document.getElementById(`card-${id}`).classList.add('dismiss')
    setTimeout(() => {
      this.props.dismissPost(id)
    }, 300)
  }
  handleDismissAll = () => this.props.dismissAll()

  render() {
    const { posts } = this.props
    const keyPosts = Object.keys(posts)
    return (
      <div className='list-container'>
        {keyPosts.length ? (
          keyPosts.map(k => {
            const { id } = posts[k]
            return (
              <div key={id} id={`card-${id}`}>
                <Card
                  post={posts[k]}
                  handleRead={this.handleRead}
                  handleDismiss={this.handleDismiss}
                />
              </div>
            )
          })
        ) : (
          <h3 className='list-container__empty-text'>Reddit Posts</h3>
        )}
        <button
          className='list-container-button__dismiss-all'
          onClick={this.handleDismissAll}
        >
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
