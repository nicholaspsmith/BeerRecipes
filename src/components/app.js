import React, { Component } from 'react'
import BeerList from '../containers/beer-list'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BeerList />

      </div>
    )
  }
}
