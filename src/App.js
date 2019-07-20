import React, { Component } from 'react'
import DATA from './data/top.json'
import { connect } from 'react-redux'
import { loadPosts } from './state/posts/actions'
import { formatPosts } from './utils/helpers'
import List from './components/List'
import './App.css'

class App extends Component {
  componentDidMount() {
    const posts = formatPosts(DATA.data.children)
    this.props.loadPosts(posts)
  }
  render() {
    return <List />
  }
}

const mapDispatchToProps = dispatch => ({
  loadPosts: posts => dispatch(loadPosts(posts))
})

export default connect(
  null,
  mapDispatchToProps
)(App)
