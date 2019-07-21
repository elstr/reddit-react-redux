import React, { Component } from 'react'
import DATA from './data/top.json'
import { connect } from 'react-redux'
import { loadPosts } from './state/posts/actions'
import { formatPosts } from './utils/helpers'
import { List, Detail } from './components'
import './App.css'

class App extends Component {
  componentDidMount() {
    const posts = formatPosts(DATA.data.children)
    this.props.loadPosts(posts)
  }
  render() {
    return (
      <div className='wrapper'>
        <List />
        <Detail />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadPosts: posts => dispatch(loadPosts(posts))
})

export default connect(
  null,
  mapDispatchToProps
)(App)
