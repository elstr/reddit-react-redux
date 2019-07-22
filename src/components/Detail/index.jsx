import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearDetail } from '../../state/posts/actions'
import './style.css'

class Detail extends Component {
  render() {
    const { post, showDetail, isMobile, clearDetail } = this.props
    return (
      <div className='detail-container'>
        {post && showDetail && (
          <>
            {isMobile && (
              <span
                className='detail-button__back'
                onClick={() => clearDetail()}
              />
            )}
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

const mapStateToProps = ({
  posts: { list, selectedPostId, showDetail },
  navigation: { isMobile }
}) => ({
  post: list[selectedPostId],
  showDetail,
  isMobile
})
const mapDispatchToProps = dispatch => ({
  clearDetail: () => dispatch(clearDetail())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
