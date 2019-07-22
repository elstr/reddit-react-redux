import React, { Component } from 'react'
import DATA from './data/top.json'
import { connect } from 'react-redux'
import { loadPosts } from './state/posts/actions'
import { setMobile } from './state/navigation/actions'
import { formatPosts } from './utils/helpers'
import { List, Detail } from './components'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.checkIfMobile()
    const posts = formatPosts(DATA.data.children)
    this.props.loadPosts(posts)
  }
  checkIfMobile() {
    const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent)
    isMobile && this.props.setMobile(true)
  }
  render() {
    const { showDetail, isMobile } = this.props
    return (
      <div className='wrapper'>
        {!isMobile ? (
          <>
            <List />
            <Detail />
          </>
        ) : showDetail ? (
          <Detail />
        ) : (
          <List />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showDetail: state.posts.showDetail,
  isMobile: state.navigation.isMobile
})

const mapDispatchToProps = dispatch => ({
  loadPosts: posts => dispatch(loadPosts(posts)),
  setMobile: isMobile => dispatch(setMobile(isMobile))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
