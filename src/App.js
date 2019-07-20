import React, { Component } from 'react'
import DATA from './data/top.json'
import './App.css'

export default class App extends Component {
  componentDidMount() {
    const posts = DATA.data.children
    console.log({posts})
  }
  render() {
    return <div />
  }
}
