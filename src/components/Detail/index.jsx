import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

class Detail extends Component {
  render() {
    const { post } = this.props
    return (
      <div className='detail-container'>
        {post && (
          <>
            <h2>{post.author}</h2>
            {post.thumbnail && (
              <img className='detail-image' src={post.thumbnail} />
            )}
            <p>{post.title}</p>
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ posts: { list, selectedPostId } }) => ({
  post: list[selectedPostId]
})

export default connect(mapStateToProps)(Detail)
